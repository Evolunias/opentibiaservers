import LowrateArchlightOtsKeywordPage, { generateMetadata } from './lowrate-archlight-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateArchlightOtsKeywordPage />;
}
