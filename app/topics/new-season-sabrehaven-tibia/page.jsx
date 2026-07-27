import NewSeasonSabrehavenTibiaKeywordPage, { generateMetadata } from './new-season-sabrehaven-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonSabrehavenTibiaKeywordPage />;
}
