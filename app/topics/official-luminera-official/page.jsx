import OfficialLumineraOfficialKeywordPage, { generateMetadata } from './official-luminera-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialLumineraOfficialKeywordPage />;
}
