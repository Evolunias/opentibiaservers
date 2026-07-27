import NewSeasonNilotRegisterKeywordPage, { generateMetadata } from './new-season-nilot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonNilotRegisterKeywordPage />;
}
