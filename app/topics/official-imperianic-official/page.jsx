import OfficialImperianicOfficialKeywordPage, { generateMetadata } from './official-imperianic-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialImperianicOfficialKeywordPage />;
}
