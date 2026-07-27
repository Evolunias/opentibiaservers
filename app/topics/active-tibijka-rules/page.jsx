import ActiveTibijkaRulesKeywordPage, { generateMetadata } from './active-tibijka-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibijkaRulesKeywordPage />;
}
