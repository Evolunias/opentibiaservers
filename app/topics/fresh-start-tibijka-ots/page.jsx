import FreshStartTibijkaOtsKeywordPage, { generateMetadata } from './fresh-start-tibijka-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibijkaOtsKeywordPage />;
}
