import LowrateThorniaRulesKeywordPage, { generateMetadata } from './lowrate-thornia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateThorniaRulesKeywordPage />;
}
