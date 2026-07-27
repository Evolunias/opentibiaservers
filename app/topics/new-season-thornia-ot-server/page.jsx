import NewSeasonThorniaOtServerKeywordPage, { generateMetadata } from './new-season-thornia-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonThorniaOtServerKeywordPage />;
}
