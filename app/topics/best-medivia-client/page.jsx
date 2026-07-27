import BestMediviaClientKeywordPage, { generateMetadata } from './best-medivia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestMediviaClientKeywordPage />;
}
