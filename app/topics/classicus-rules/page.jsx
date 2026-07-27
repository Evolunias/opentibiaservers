import ClassicusRulesKeywordPage, { generateMetadata } from './classicus-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusRulesKeywordPage />;
}
