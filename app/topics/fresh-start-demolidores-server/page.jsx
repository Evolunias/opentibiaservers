import FreshStartDemolidoresServerKeywordPage, { generateMetadata } from './fresh-start-demolidores-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartDemolidoresServerKeywordPage />;
}
