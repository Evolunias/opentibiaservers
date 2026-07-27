import OfficialTibijkaOfficialKeywordPage, { generateMetadata } from './official-tibijka-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibijkaOfficialKeywordPage />;
}
