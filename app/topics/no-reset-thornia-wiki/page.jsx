import NoResetThorniaWikiKeywordPage, { generateMetadata } from './no-reset-thornia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetThorniaWikiKeywordPage />;
}
