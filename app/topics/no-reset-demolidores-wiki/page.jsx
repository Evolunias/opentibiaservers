import NoResetDemolidoresWikiKeywordPage, { generateMetadata } from './no-reset-demolidores-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetDemolidoresWikiKeywordPage />;
}
