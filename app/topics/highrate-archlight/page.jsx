import HighrateArchlightKeywordPage, { generateMetadata } from './highrate-archlight';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateArchlightKeywordPage />;
}
