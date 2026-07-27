import NewSeasonArchlightRegisterKeywordPage, { generateMetadata } from './new-season-archlight-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonArchlightRegisterKeywordPage />;
}
