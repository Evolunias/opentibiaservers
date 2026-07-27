import ActiveRealestaRulesKeywordPage, { generateMetadata } from './active-realesta-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRealestaRulesKeywordPage />;
}
