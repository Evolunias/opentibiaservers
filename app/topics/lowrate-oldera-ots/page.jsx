import LowrateOlderaOtsKeywordPage, { generateMetadata } from './lowrate-oldera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateOlderaOtsKeywordPage />;
}
