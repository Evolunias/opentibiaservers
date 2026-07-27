import BestSaintsotRulesKeywordPage, { generateMetadata } from './best-saintsot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestSaintsotRulesKeywordPage />;
}
