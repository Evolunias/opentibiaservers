import NoResetEvoluniaRulesKeywordPage, { generateMetadata } from './no-reset-evolunia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetEvoluniaRulesKeywordPage />;
}
