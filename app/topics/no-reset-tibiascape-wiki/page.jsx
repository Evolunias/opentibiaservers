import NoResetTibiascapeWikiKeywordPage, { generateMetadata } from './no-reset-tibiascape-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibiascapeWikiKeywordPage />;
}
