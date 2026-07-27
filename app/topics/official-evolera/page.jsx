import OfficialEvoleraKeywordPage, { generateMetadata } from './official-evolera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialEvoleraKeywordPage />;
}
