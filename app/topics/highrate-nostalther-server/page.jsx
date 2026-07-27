import HighrateNostaltherServerKeywordPage, { generateMetadata } from './highrate-nostalther-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateNostaltherServerKeywordPage />;
}
