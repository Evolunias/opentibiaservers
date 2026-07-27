import LowrateSabrehavenWikiKeywordPage, { generateMetadata } from './lowrate-sabrehaven-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateSabrehavenWikiKeywordPage />;
}
