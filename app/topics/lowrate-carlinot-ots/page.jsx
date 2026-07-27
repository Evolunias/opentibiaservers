import LowrateCarlinotOtsKeywordPage, { generateMetadata } from './lowrate-carlinot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCarlinotOtsKeywordPage />;
}
