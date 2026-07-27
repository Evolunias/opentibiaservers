import LowrateNepreniaOtsKeywordPage, { generateMetadata } from './lowrate-neprenia-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNepreniaOtsKeywordPage />;
}
