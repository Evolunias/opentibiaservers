import NewSeasonSabrehavenOpenTibiaKeywordPage, { generateMetadata } from './new-season-sabrehaven-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonSabrehavenOpenTibiaKeywordPage />;
}
