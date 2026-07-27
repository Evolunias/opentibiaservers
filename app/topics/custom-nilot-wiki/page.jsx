import CustomNilotWikiKeywordPage, { generateMetadata } from './custom-nilot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNilotWikiKeywordPage />;
}
