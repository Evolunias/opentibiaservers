import NoResetWikiNorthAmericaKeywordPage, { generateMetadata } from './no-reset-wiki-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetWikiNorthAmericaKeywordPage />;
}
