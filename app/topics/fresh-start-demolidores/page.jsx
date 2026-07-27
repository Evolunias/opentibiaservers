import FreshStartDemolidoresKeywordPage, { generateMetadata } from './fresh-start-demolidores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartDemolidoresKeywordPage />;
}
