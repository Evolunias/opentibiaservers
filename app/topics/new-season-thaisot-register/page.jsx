import NewSeasonThaisotRegisterKeywordPage, { generateMetadata } from './new-season-thaisot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonThaisotRegisterKeywordPage />;
}
