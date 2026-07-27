import FreshStartTibijkaOtKeywordPage, { generateMetadata } from './fresh-start-tibijka-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibijkaOtKeywordPage />;
}
