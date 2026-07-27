import NoResetWikiCanadaKeywordPage, { generateMetadata } from './no-reset-wiki-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetWikiCanadaKeywordPage />;
}
