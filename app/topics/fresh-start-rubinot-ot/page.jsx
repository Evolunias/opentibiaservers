import FreshStartRubinotOtKeywordPage, { generateMetadata } from './fresh-start-rubinot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartRubinotOtKeywordPage />;
}
