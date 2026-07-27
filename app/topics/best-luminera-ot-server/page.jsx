import BestLumineraOtServerKeywordPage, { generateMetadata } from './best-luminera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestLumineraOtServerKeywordPage />;
}
