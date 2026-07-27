import HighrateAmeriaOtServerKeywordPage, { generateMetadata } from './highrate-ameria-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateAmeriaOtServerKeywordPage />;
}
