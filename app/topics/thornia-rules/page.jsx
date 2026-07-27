import ThorniaRulesKeywordPage, { generateMetadata } from './thornia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaRulesKeywordPage />;
}
