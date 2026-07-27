import PopularEvoluniaLoginKeywordPage, { generateMetadata } from './popular-evolunia-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularEvoluniaLoginKeywordPage />;
}
