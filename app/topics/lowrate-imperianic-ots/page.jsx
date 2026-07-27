import LowrateImperianicOtsKeywordPage, { generateMetadata } from './lowrate-imperianic-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateImperianicOtsKeywordPage />;
}
