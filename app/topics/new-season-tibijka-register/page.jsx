import NewSeasonTibijkaRegisterKeywordPage, { generateMetadata } from './new-season-tibijka-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibijkaRegisterKeywordPage />;
}
