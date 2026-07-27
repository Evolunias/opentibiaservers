import NewSeasonRubinotOfficialKeywordPage, { generateMetadata } from './new-season-rubinot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonRubinotOfficialKeywordPage />;
}
