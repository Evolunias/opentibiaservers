import FreshStartRubinotKeywordPage, { generateMetadata } from './fresh-start-rubinot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartRubinotKeywordPage />;
}
