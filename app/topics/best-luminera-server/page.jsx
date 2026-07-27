import BestLumineraServerKeywordPage, { generateMetadata } from './best-luminera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestLumineraServerKeywordPage />;
}
