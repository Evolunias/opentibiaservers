import FreshStartUnlineClientKeywordPage, { generateMetadata } from './fresh-start-unline-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartUnlineClientKeywordPage />;
}
