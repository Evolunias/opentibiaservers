import ActiveSaintsotRulesKeywordPage, { generateMetadata } from './active-saintsot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveSaintsotRulesKeywordPage />;
}
