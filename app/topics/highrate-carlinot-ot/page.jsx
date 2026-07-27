import HighrateCarlinotOtKeywordPage, { generateMetadata } from './highrate-carlinot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCarlinotOtKeywordPage />;
}
