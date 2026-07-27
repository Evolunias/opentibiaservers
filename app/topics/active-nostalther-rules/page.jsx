import ActiveNostaltherRulesKeywordPage, { generateMetadata } from './active-nostalther-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNostaltherRulesKeywordPage />;
}
