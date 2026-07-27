import RealMapEvoluniaRulesKeywordPage, { generateMetadata } from './real-map-evolunia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapEvoluniaRulesKeywordPage />;
}
