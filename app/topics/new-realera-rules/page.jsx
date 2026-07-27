import NewRealeraRulesKeywordPage, { generateMetadata } from './new-realera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRealeraRulesKeywordPage />;
}
