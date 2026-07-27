import NewSeasonEvoluniaLoginKeywordPage, { generateMetadata } from './new-season-evolunia-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonEvoluniaLoginKeywordPage />;
}
