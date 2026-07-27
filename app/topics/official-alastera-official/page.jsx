import OfficialAlasteraOfficialKeywordPage, { generateMetadata } from './official-alastera-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialAlasteraOfficialKeywordPage />;
}
