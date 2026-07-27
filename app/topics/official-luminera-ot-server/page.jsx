import OfficialLumineraOtServerKeywordPage, { generateMetadata } from './official-luminera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialLumineraOtServerKeywordPage />;
}
