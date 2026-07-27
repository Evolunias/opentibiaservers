import HighrateNostaltherClientKeywordPage, { generateMetadata } from './highrate-nostalther-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateNostaltherClientKeywordPage />;
}
