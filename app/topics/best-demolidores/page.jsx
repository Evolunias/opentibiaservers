import BestDemolidoresKeywordPage, { generateMetadata } from './best-demolidores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestDemolidoresKeywordPage />;
}
