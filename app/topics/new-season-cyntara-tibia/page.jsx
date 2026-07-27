import NewSeasonCyntaraTibiaKeywordPage, { generateMetadata } from './new-season-cyntara-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCyntaraTibiaKeywordPage />;
}
