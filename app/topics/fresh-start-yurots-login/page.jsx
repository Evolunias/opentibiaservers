import FreshStartYurotsLoginKeywordPage, { generateMetadata } from './fresh-start-yurots-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartYurotsLoginKeywordPage />;
}
