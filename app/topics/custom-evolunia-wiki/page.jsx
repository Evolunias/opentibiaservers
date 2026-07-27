import CustomEvoluniaWikiKeywordPage, { generateMetadata } from './custom-evolunia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomEvoluniaWikiKeywordPage />;
}
