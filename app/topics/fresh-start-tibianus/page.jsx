import FreshStartTibianusKeywordPage, { generateMetadata } from './fresh-start-tibianus';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibianusKeywordPage />;
}
