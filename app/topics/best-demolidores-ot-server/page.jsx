import BestDemolidoresOtServerKeywordPage, { generateMetadata } from './best-demolidores-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestDemolidoresOtServerKeywordPage />;
}
