import HighrateCarlinotOtServerKeywordPage, { generateMetadata } from './highrate-carlinot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCarlinotOtServerKeywordPage />;
}
