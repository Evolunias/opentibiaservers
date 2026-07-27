import OfficialCanobRulesKeywordPage, { generateMetadata } from './official-canob-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCanobRulesKeywordPage />;
}
