import NoResetAlasteraWikiKeywordPage, { generateMetadata } from './no-reset-alastera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetAlasteraWikiKeywordPage />;
}
