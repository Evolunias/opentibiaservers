import NoResetTibiascapeRulesKeywordPage, { generateMetadata } from './no-reset-tibiascape-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibiascapeRulesKeywordPage />;
}
