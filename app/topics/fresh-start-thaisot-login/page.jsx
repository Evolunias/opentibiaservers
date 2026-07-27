import FreshStartThaisotLoginKeywordPage, { generateMetadata } from './fresh-start-thaisot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartThaisotLoginKeywordPage />;
}
