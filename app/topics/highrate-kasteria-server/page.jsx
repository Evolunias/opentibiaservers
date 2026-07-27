import HighrateKasteriaServerKeywordPage, { generateMetadata } from './highrate-kasteria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateKasteriaServerKeywordPage />;
}
