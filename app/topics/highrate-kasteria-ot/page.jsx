import HighrateKasteriaOtKeywordPage, { generateMetadata } from './highrate-kasteria-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateKasteriaOtKeywordPage />;
}
