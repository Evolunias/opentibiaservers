import BestDemolidoresServerKeywordPage, { generateMetadata } from './best-demolidores-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestDemolidoresServerKeywordPage />;
}
