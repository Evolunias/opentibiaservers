import OfficialTibijkaPrivateServerKeywordPage, { generateMetadata } from './official-tibijka-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibijkaPrivateServerKeywordPage />;
}
