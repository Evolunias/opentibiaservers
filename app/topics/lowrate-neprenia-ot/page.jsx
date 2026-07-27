import LowrateNepreniaOtKeywordPage, { generateMetadata } from './lowrate-neprenia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNepreniaOtKeywordPage />;
}
