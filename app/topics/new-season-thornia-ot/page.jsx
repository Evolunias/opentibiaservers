import NewSeasonThorniaOtKeywordPage, { generateMetadata } from './new-season-thornia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonThorniaOtKeywordPage />;
}
