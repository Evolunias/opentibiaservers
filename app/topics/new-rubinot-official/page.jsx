import NewRubinotOfficialKeywordPage, { generateMetadata } from './new-rubinot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRubinotOfficialKeywordPage />;
}
