import ActiveAureraGlobalRulesKeywordPage, { generateMetadata } from './active-aurera-global-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveAureraGlobalRulesKeywordPage />;
}
