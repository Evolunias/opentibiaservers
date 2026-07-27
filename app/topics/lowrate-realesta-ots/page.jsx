import LowrateRealestaOtsKeywordPage, { generateMetadata } from './lowrate-realesta-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateRealestaOtsKeywordPage />;
}
