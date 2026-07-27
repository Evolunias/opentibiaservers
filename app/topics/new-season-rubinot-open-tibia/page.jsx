import NewSeasonRubinotOpenTibiaKeywordPage, { generateMetadata } from './new-season-rubinot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonRubinotOpenTibiaKeywordPage />;
}
