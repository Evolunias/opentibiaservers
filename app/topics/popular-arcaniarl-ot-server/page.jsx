import PopularArcaniarlOtServerKeywordPage, { generateMetadata } from './popular-arcaniarl-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularArcaniarlOtServerKeywordPage />;
}
