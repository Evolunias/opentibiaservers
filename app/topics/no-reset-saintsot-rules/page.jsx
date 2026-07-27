import NoResetSaintsotRulesKeywordPage, { generateMetadata } from './no-reset-saintsot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetSaintsotRulesKeywordPage />;
}
