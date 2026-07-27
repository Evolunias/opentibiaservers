import HighrateImperianicLoginKeywordPage, { generateMetadata } from './highrate-imperianic-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateImperianicLoginKeywordPage />;
}
