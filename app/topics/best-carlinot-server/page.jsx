import BestCarlinotServerKeywordPage, { generateMetadata } from './best-carlinot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCarlinotServerKeywordPage />;
}
