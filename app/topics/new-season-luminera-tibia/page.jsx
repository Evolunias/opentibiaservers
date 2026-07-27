import NewSeasonLumineraTibiaKeywordPage, { generateMetadata } from './new-season-luminera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonLumineraTibiaKeywordPage />;
}
