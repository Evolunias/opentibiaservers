import NoResetNostaltherRulesKeywordPage, { generateMetadata } from './no-reset-nostalther-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetNostaltherRulesKeywordPage />;
}
