import NewSeasonMidhemRegisterKeywordPage, { generateMetadata } from './new-season-midhem-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMidhemRegisterKeywordPage />;
}
