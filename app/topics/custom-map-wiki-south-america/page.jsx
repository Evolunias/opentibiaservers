import CustomMapWikiSouthAmericaKeywordPage, { generateMetadata } from './custom-map-wiki-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapWikiSouthAmericaKeywordPage />;
}
