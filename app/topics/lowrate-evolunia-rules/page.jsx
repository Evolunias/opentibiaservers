import LowrateEvoluniaRulesKeywordPage, { generateMetadata } from './lowrate-evolunia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateEvoluniaRulesKeywordPage />;
}
