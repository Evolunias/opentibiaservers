import OfficialClassicusOfficialKeywordPage, { generateMetadata } from './official-classicus-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialClassicusOfficialKeywordPage />;
}
