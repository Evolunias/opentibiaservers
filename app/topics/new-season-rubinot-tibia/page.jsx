import NewSeasonRubinotTibiaKeywordPage, { generateMetadata } from './new-season-rubinot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonRubinotTibiaKeywordPage />;
}
