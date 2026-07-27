import ActiveRubinotOtKeywordPage, { generateMetadata } from './active-rubinot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRubinotOtKeywordPage />;
}
