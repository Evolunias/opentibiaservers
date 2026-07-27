import HighrateKasteriaLoginKeywordPage, { generateMetadata } from './highrate-kasteria-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateKasteriaLoginKeywordPage />;
}
