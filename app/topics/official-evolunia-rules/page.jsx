import OfficialEvoluniaRulesKeywordPage, { generateMetadata } from './official-evolunia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialEvoluniaRulesKeywordPage />;
}
