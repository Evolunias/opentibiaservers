import NewSeasonAlasteraRegisterKeywordPage, { generateMetadata } from './new-season-alastera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonAlasteraRegisterKeywordPage />;
}
