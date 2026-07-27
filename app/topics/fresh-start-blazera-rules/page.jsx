import FreshStartBlazeraRulesKeywordPage, { generateMetadata } from './fresh-start-blazera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartBlazeraRulesKeywordPage />;
}
