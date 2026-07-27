import ActiveTibianusRulesKeywordPage, { generateMetadata } from './active-tibianus-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibianusRulesKeywordPage />;
}
