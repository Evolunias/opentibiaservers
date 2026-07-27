import SeasonalWikiFranceKeywordPage, { generateMetadata } from './seasonal-wiki-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalWikiFranceKeywordPage />;
}
