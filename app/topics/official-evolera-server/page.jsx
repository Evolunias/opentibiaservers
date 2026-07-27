import OfficialEvoleraServerKeywordPage, { generateMetadata } from './official-evolera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialEvoleraServerKeywordPage />;
}
