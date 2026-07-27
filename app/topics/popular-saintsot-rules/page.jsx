import PopularSaintsotRulesKeywordPage, { generateMetadata } from './popular-saintsot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularSaintsotRulesKeywordPage />;
}
