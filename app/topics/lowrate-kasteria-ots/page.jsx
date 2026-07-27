import LowrateKasteriaOtsKeywordPage, { generateMetadata } from './lowrate-kasteria-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateKasteriaOtsKeywordPage />;
}
