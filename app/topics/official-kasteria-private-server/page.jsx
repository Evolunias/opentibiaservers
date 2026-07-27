import OfficialKasteriaPrivateServerKeywordPage, { generateMetadata } from './official-kasteria-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialKasteriaPrivateServerKeywordPage />;
}
