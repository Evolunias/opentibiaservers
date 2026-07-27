import TopThorniaRulesKeywordPage, { generateMetadata } from './top-thornia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopThorniaRulesKeywordPage />;
}
