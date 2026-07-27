import PopularArcaniarlKeywordPage, { generateMetadata } from './popular-arcaniarl';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularArcaniarlKeywordPage />;
}
