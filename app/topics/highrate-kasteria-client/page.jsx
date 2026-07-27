import HighrateKasteriaClientKeywordPage, { generateMetadata } from './highrate-kasteria-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateKasteriaClientKeywordPage />;
}
