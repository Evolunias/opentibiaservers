import NewSeasonTibianusRegisterKeywordPage, { generateMetadata } from './new-season-tibianus-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibianusRegisterKeywordPage />;
}
