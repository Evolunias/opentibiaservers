import NewSeasonRubinotOtServerKeywordPage, { generateMetadata } from './new-season-rubinot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonRubinotOtServerKeywordPage />;
}
