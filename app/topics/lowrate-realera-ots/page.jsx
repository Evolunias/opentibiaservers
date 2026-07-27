import LowrateRealeraOtsKeywordPage, { generateMetadata } from './lowrate-realera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateRealeraOtsKeywordPage />;
}
