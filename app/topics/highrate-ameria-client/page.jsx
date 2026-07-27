import HighrateAmeriaClientKeywordPage, { generateMetadata } from './highrate-ameria-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateAmeriaClientKeywordPage />;
}
