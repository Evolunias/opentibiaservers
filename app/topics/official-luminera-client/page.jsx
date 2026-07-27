import OfficialLumineraClientKeywordPage, { generateMetadata } from './official-luminera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialLumineraClientKeywordPage />;
}
