import RuberaWikiKeywordPage, { generateMetadata } from './rubera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RuberaWikiKeywordPage />;
}
