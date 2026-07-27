import NoResetWikiSouthAmericaKeywordPage, { generateMetadata } from './no-reset-wiki-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetWikiSouthAmericaKeywordPage />;
}
