import CustomMapWikiFranceKeywordPage, { generateMetadata } from './custom-map-wiki-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapWikiFranceKeywordPage />;
}
