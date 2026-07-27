import NtoStarRulesKeywordPage, { generateMetadata } from './nto-star-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarRulesKeywordPage />;
}
