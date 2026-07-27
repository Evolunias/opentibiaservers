import ActiveClassicusRulesKeywordPage, { generateMetadata } from './active-classicus-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveClassicusRulesKeywordPage />;
}
