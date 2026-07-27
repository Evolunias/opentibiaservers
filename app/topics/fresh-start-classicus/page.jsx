import FreshStartClassicusKeywordPage, { generateMetadata } from './fresh-start-classicus';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartClassicusKeywordPage />;
}
