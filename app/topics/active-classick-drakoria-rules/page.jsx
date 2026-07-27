import ActiveClassickDrakoriaRulesKeywordPage, { generateMetadata } from './active-classick-drakoria-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveClassickDrakoriaRulesKeywordPage />;
}
