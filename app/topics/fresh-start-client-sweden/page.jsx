import FreshStartClientSwedenKeywordPage, { generateMetadata } from './fresh-start-client-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartClientSwedenKeywordPage />;
}
