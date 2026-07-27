import NewSeasonClassickDrakoriaTibiaKeywordPage, { generateMetadata } from './new-season-classick-drakoria-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonClassickDrakoriaTibiaKeywordPage />;
}
