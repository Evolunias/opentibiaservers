import NoResetWikiUsaKeywordPage, { generateMetadata } from './no-reset-wiki-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetWikiUsaKeywordPage />;
}
