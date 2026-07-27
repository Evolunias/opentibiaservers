import OfficialThaisotOfficialKeywordPage, { generateMetadata } from './official-thaisot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialThaisotOfficialKeywordPage />;
}
