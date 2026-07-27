import NewSeasonSaintsotRegisterKeywordPage, { generateMetadata } from './new-season-saintsot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonSaintsotRegisterKeywordPage />;
}
