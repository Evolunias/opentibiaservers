import ActiveRubinotOfficialKeywordPage, { generateMetadata } from './active-rubinot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRubinotOfficialKeywordPage />;
}
