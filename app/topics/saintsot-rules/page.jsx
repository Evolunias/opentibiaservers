import SaintsotRulesKeywordPage, { generateMetadata } from './saintsot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotRulesKeywordPage />;
}
