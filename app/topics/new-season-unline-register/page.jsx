import NewSeasonUnlineRegisterKeywordPage, { generateMetadata } from './new-season-unline-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonUnlineRegisterKeywordPage />;
}
