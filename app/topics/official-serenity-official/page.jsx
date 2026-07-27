import OfficialSerenityOfficialKeywordPage, { generateMetadata } from './official-serenity-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialSerenityOfficialKeywordPage />;
}
