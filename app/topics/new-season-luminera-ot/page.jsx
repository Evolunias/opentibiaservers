import NewSeasonLumineraOtKeywordPage, { generateMetadata } from './new-season-luminera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonLumineraOtKeywordPage />;
}
