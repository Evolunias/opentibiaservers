import NewSeasonCanobRegisterKeywordPage, { generateMetadata } from './new-season-canob-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCanobRegisterKeywordPage />;
}
