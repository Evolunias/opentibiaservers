import NoResetCalmeraOtWikiKeywordPage, { generateMetadata } from './no-reset-calmera-ot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetCalmeraOtWikiKeywordPage />;
}
