import TopBlazeraRulesKeywordPage, { generateMetadata } from './top-blazera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopBlazeraRulesKeywordPage />;
}
