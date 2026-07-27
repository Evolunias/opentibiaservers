import BestArchlightKeywordPage, { generateMetadata } from './best-archlight';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestArchlightKeywordPage />;
}
