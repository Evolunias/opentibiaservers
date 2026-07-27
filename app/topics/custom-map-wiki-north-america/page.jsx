import CustomMapWikiNorthAmericaKeywordPage, { generateMetadata } from './custom-map-wiki-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapWikiNorthAmericaKeywordPage />;
}
