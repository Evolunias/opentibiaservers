import BestOlderaKeywordPage, { generateMetadata } from './best-oldera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestOlderaKeywordPage />;
}
