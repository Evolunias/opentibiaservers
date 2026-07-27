import OfficialLumineraOtKeywordPage, { generateMetadata } from './official-luminera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialLumineraOtKeywordPage />;
}
