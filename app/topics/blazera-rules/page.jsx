import BlazeraRulesKeywordPage, { generateMetadata } from './blazera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraRulesKeywordPage />;
}
