import OfficialOlderaOfficialKeywordPage, { generateMetadata } from './official-oldera-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialOlderaOfficialKeywordPage />;
}
