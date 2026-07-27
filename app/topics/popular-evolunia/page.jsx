import PopularEvoluniaKeywordPage, { generateMetadata } from './popular-evolunia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularEvoluniaKeywordPage />;
}
