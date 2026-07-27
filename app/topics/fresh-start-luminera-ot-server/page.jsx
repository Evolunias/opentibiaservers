import FreshStartLumineraOtServerKeywordPage, { generateMetadata } from './fresh-start-luminera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartLumineraOtServerKeywordPage />;
}
