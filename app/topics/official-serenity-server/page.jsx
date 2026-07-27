import OfficialSerenityServerKeywordPage, { generateMetadata } from './official-serenity-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialSerenityServerKeywordPage />;
}
