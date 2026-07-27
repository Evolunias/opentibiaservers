import FreshStartTibijkaClientKeywordPage, { generateMetadata } from './fresh-start-tibijka-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibijkaClientKeywordPage />;
}
