import EternalOdysseyWikiKeywordPage, { generateMetadata } from './eternal-odyssey-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EternalOdysseyWikiKeywordPage />;
}
