import PopularThorniaRulesKeywordPage, { generateMetadata } from './popular-thornia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularThorniaRulesKeywordPage />;
}
