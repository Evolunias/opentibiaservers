import NewSeasonSabrehavenRegisterKeywordPage, { generateMetadata } from './new-season-sabrehaven-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonSabrehavenRegisterKeywordPage />;
}
