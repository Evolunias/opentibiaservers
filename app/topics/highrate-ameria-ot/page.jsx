import HighrateAmeriaOtKeywordPage, { generateMetadata } from './highrate-ameria-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateAmeriaOtKeywordPage />;
}
