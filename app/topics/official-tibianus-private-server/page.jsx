import OfficialTibianusPrivateServerKeywordPage, { generateMetadata } from './official-tibianus-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibianusPrivateServerKeywordPage />;
}
