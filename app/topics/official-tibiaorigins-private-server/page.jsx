import OfficialTibiaoriginsPrivateServerKeywordPage, { generateMetadata } from './official-tibiaorigins-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiaoriginsPrivateServerKeywordPage />;
}
