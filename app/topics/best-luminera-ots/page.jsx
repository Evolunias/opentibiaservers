import BestLumineraOtsKeywordPage, { generateMetadata } from './best-luminera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestLumineraOtsKeywordPage />;
}
