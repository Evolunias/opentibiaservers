import NewSeasonXanteriaOpenTibiaKeywordPage, { generateMetadata } from './new-season-xanteria-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonXanteriaOpenTibiaKeywordPage />;
}
