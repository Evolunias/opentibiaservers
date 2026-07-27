import OfficialLumineraKeywordPage, { generateMetadata } from './official-luminera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialLumineraKeywordPage />;
}
