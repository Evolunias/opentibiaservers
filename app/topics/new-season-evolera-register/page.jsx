import NewSeasonEvoleraRegisterKeywordPage, { generateMetadata } from './new-season-evolera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonEvoleraRegisterKeywordPage />;
}
