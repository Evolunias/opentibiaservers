import NewSeasonLumineraOtServerKeywordPage, { generateMetadata } from './new-season-luminera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonLumineraOtServerKeywordPage />;
}
