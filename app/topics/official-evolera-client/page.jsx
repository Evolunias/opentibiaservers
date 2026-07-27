import OfficialEvoleraClientKeywordPage, { generateMetadata } from './official-evolera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialEvoleraClientKeywordPage />;
}
