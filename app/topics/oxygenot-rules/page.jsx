import OxygenotRulesKeywordPage, { generateMetadata } from './oxygenot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotRulesKeywordPage />;
}
