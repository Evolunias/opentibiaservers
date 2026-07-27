import PopularArcaniarlOtKeywordPage, { generateMetadata } from './popular-arcaniarl-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularArcaniarlOtKeywordPage />;
}
