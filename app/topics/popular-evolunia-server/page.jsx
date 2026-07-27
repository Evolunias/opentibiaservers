import PopularEvoluniaServerKeywordPage, { generateMetadata } from './popular-evolunia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularEvoluniaServerKeywordPage />;
}
