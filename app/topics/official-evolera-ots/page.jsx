import OfficialEvoleraOtsKeywordPage, { generateMetadata } from './official-evolera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialEvoleraOtsKeywordPage />;
}
