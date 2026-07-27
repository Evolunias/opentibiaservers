import HighrateAmeriaLoginKeywordPage, { generateMetadata } from './highrate-ameria-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateAmeriaLoginKeywordPage />;
}
