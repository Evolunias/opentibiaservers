import HighrateNostaltherKeywordPage, { generateMetadata } from './highrate-nostalther';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateNostaltherKeywordPage />;
}
