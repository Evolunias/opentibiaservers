import BestCarlinotKeywordPage, { generateMetadata } from './best-carlinot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCarlinotKeywordPage />;
}
