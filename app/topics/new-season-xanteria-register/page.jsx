import NewSeasonXanteriaRegisterKeywordPage, { generateMetadata } from './new-season-xanteria-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonXanteriaRegisterKeywordPage />;
}
