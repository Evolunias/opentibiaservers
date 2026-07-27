import NewSeasonTibiameRegisterKeywordPage, { generateMetadata } from './new-season-tibiame-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiameRegisterKeywordPage />;
}
