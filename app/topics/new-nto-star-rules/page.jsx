import NewNtoStarRulesKeywordPage, { generateMetadata } from './new-nto-star-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNtoStarRulesKeywordPage />;
}
