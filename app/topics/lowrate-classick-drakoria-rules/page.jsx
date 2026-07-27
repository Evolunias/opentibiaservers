import LowrateClassickDrakoriaRulesKeywordPage, { generateMetadata } from './lowrate-classick-drakoria-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateClassickDrakoriaRulesKeywordPage />;
}
