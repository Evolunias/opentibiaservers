import ArchlightOtsKeywordPage, { generateMetadata } from './archlight-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightOtsKeywordPage />;
}
