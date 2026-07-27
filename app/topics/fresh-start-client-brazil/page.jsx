import FreshStartClientBrazilKeywordPage, { generateMetadata } from './fresh-start-client-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartClientBrazilKeywordPage />;
}
