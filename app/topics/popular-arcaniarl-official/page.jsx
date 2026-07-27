import PopularArcaniarlOfficialKeywordPage, { generateMetadata } from './popular-arcaniarl-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularArcaniarlOfficialKeywordPage />;
}
