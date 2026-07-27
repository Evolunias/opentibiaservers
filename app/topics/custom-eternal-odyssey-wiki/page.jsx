import CustomEternalOdysseyWikiKeywordPage, { generateMetadata } from './custom-eternal-odyssey-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomEternalOdysseyWikiKeywordPage />;
}
