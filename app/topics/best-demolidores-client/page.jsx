import BestDemolidoresClientKeywordPage, { generateMetadata } from './best-demolidores-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestDemolidoresClientKeywordPage />;
}
