import NoResetAlasteraRulesKeywordPage, { generateMetadata } from './no-reset-alastera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetAlasteraRulesKeywordPage />;
}
