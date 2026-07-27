import PopularArcaniarlClientKeywordPage, { generateMetadata } from './popular-arcaniarl-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularArcaniarlClientKeywordPage />;
}
