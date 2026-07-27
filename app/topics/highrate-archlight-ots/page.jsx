import HighrateArchlightOtsKeywordPage, { generateMetadata } from './highrate-archlight-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateArchlightOtsKeywordPage />;
}
