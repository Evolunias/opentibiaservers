import BestLumineraClientKeywordPage, { generateMetadata } from './best-luminera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestLumineraClientKeywordPage />;
}
