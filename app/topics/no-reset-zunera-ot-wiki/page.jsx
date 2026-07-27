import NoResetZuneraOtWikiKeywordPage, { generateMetadata } from './no-reset-zunera-ot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetZuneraOtWikiKeywordPage />;
}
