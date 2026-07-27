import OfficialSabrehavenGuideKeywordPage, { generateMetadata } from './official-sabrehaven-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialSabrehavenGuideKeywordPage />;
}
