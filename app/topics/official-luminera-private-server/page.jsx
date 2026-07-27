import OfficialLumineraPrivateServerKeywordPage, { generateMetadata } from './official-luminera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialLumineraPrivateServerKeywordPage />;
}
