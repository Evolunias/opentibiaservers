import HighrateAmeriaServerKeywordPage, { generateMetadata } from './highrate-ameria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateAmeriaServerKeywordPage />;
}
