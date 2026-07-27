import NewThorniaRulesKeywordPage, { generateMetadata } from './new-thornia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewThorniaRulesKeywordPage />;
}
