import FreshStartRubinotLoginKeywordPage, { generateMetadata } from './fresh-start-rubinot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartRubinotLoginKeywordPage />;
}
