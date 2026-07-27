import LowrateAmeriaOtsKeywordPage, { generateMetadata } from './lowrate-ameria-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateAmeriaOtsKeywordPage />;
}
