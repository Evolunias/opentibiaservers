import OfficialXanteriaPrivateServerKeywordPage, { generateMetadata } from './official-xanteria-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialXanteriaPrivateServerKeywordPage />;
}
