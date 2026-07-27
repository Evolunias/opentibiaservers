import OfficialXanteriaOfficialKeywordPage, { generateMetadata } from './official-xanteria-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialXanteriaOfficialKeywordPage />;
}
