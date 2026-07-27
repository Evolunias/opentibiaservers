import NewSeasonCoxaotLoginKeywordPage, { generateMetadata } from './new-season-coxaot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCoxaotLoginKeywordPage />;
}
