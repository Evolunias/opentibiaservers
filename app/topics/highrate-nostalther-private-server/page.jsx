import HighrateNostaltherPrivateServerKeywordPage, { generateMetadata } from './highrate-nostalther-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateNostaltherPrivateServerKeywordPage />;
}
