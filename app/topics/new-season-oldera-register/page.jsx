import NewSeasonOlderaRegisterKeywordPage, { generateMetadata } from './new-season-oldera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonOlderaRegisterKeywordPage />;
}
