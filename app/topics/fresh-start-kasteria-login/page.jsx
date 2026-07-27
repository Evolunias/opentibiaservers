import FreshStartKasteriaLoginKeywordPage, { generateMetadata } from './fresh-start-kasteria-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartKasteriaLoginKeywordPage />;
}
