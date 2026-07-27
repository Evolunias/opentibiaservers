import OfficialThorniaRulesKeywordPage, { generateMetadata } from './official-thornia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialThorniaRulesKeywordPage />;
}
