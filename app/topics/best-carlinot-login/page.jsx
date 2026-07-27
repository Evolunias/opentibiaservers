import BestCarlinotLoginKeywordPage, { generateMetadata } from './best-carlinot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCarlinotLoginKeywordPage />;
}
