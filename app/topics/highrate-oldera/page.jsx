import HighrateOlderaKeywordPage, { generateMetadata } from './highrate-oldera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateOlderaKeywordPage />;
}
