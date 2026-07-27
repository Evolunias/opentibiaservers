import OfficialSerenityPrivateServerKeywordPage, { generateMetadata } from './official-serenity-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialSerenityPrivateServerKeywordPage />;
}
