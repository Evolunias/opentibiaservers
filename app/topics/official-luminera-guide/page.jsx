import OfficialLumineraGuideKeywordPage, { generateMetadata } from './official-luminera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialLumineraGuideKeywordPage />;
}
