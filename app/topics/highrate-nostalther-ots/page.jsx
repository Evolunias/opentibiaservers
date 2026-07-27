import HighrateNostaltherOtsKeywordPage, { generateMetadata } from './highrate-nostalther-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateNostaltherOtsKeywordPage />;
}
