import ActiveRubinotKeywordPage, { generateMetadata } from './active-rubinot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRubinotKeywordPage />;
}
