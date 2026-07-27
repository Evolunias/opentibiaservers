import NewSeasonCoxaotRegisterKeywordPage, { generateMetadata } from './new-season-coxaot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCoxaotRegisterKeywordPage />;
}
