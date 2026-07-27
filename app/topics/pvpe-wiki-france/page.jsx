import PvpeWikiFranceKeywordPage, { generateMetadata } from './pvpe-wiki-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeWikiFranceKeywordPage />;
}
