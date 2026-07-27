import OfficialNilotOfficialKeywordPage, { generateMetadata } from './official-nilot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNilotOfficialKeywordPage />;
}
