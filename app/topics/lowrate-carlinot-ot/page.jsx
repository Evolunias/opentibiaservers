import LowrateCarlinotOtKeywordPage, { generateMetadata } from './lowrate-carlinot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCarlinotOtKeywordPage />;
}
