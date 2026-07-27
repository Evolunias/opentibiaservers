import HighrateCarlinotLoginKeywordPage, { generateMetadata } from './highrate-carlinot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCarlinotLoginKeywordPage />;
}
