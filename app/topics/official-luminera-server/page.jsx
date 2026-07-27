import OfficialLumineraServerKeywordPage, { generateMetadata } from './official-luminera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialLumineraServerKeywordPage />;
}
