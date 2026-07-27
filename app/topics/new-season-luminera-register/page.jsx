import NewSeasonLumineraRegisterKeywordPage, { generateMetadata } from './new-season-luminera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonLumineraRegisterKeywordPage />;
}
