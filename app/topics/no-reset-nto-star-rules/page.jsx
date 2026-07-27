import NoResetNtoStarRulesKeywordPage, { generateMetadata } from './no-reset-nto-star-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetNtoStarRulesKeywordPage />;
}
