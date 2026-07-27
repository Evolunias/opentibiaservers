import PopularEvoluniaClientKeywordPage, { generateMetadata } from './popular-evolunia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularEvoluniaClientKeywordPage />;
}
