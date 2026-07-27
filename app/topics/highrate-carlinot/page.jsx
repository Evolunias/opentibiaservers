import HighrateCarlinotKeywordPage, { generateMetadata } from './highrate-carlinot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCarlinotKeywordPage />;
}
