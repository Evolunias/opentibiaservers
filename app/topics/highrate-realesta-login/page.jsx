import HighrateRealestaLoginKeywordPage, { generateMetadata } from './highrate-realesta-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateRealestaLoginKeywordPage />;
}
