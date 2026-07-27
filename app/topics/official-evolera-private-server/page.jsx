import OfficialEvoleraPrivateServerKeywordPage, { generateMetadata } from './official-evolera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialEvoleraPrivateServerKeywordPage />;
}
