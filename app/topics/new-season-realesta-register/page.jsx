import NewSeasonRealestaRegisterKeywordPage, { generateMetadata } from './new-season-realesta-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonRealestaRegisterKeywordPage />;
}
