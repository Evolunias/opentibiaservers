import PopularEvoluniaRulesKeywordPage, { generateMetadata } from './popular-evolunia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularEvoluniaRulesKeywordPage />;
}
