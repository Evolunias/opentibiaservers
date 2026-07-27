import FreshStartClassicusClientKeywordPage, { generateMetadata } from './fresh-start-classicus-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartClassicusClientKeywordPage />;
}
