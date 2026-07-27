import CurrentSaintsotRulesKeywordPage, { generateMetadata } from './current-saintsot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentSaintsotRulesKeywordPage />;
}
