import FreshStartClassicusLoginKeywordPage, { generateMetadata } from './fresh-start-classicus-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartClassicusLoginKeywordPage />;
}
