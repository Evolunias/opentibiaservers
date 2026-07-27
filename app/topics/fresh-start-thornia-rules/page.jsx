import FreshStartThorniaRulesKeywordPage, { generateMetadata } from './fresh-start-thornia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartThorniaRulesKeywordPage />;
}
