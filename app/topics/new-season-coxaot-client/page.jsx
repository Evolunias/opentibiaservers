import NewSeasonCoxaotClientKeywordPage, { generateMetadata } from './new-season-coxaot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCoxaotClientKeywordPage />;
}
