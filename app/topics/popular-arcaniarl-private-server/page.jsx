import PopularArcaniarlPrivateServerKeywordPage, { generateMetadata } from './popular-arcaniarl-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularArcaniarlPrivateServerKeywordPage />;
}
