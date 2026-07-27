import OfficialSerenityClientKeywordPage, { generateMetadata } from './official-serenity-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialSerenityClientKeywordPage />;
}
