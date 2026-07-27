import PopularEvoluniaPrivateServerKeywordPage, { generateMetadata } from './popular-evolunia-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularEvoluniaPrivateServerKeywordPage />;
}
