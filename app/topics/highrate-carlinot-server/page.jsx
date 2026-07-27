import HighrateCarlinotServerKeywordPage, { generateMetadata } from './highrate-carlinot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCarlinotServerKeywordPage />;
}
