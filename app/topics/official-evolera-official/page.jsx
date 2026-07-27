import OfficialEvoleraOfficialKeywordPage, { generateMetadata } from './official-evolera-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialEvoleraOfficialKeywordPage />;
}
