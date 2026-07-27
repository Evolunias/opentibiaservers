import ActiveNtoStarRulesKeywordPage, { generateMetadata } from './active-nto-star-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNtoStarRulesKeywordPage />;
}
