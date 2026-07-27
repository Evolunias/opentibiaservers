import NewSeasonCoxaotKeywordPage, { generateMetadata } from './new-season-coxaot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCoxaotKeywordPage />;
}
