import PopularEvoluniaOtsKeywordPage, { generateMetadata } from './popular-evolunia-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularEvoluniaOtsKeywordPage />;
}
