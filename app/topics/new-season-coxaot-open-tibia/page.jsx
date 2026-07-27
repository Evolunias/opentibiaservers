import NewSeasonCoxaotOpenTibiaKeywordPage, { generateMetadata } from './new-season-coxaot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCoxaotOpenTibiaKeywordPage />;
}
