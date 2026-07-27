import NewSabrehavenRulesKeywordPage, { generateMetadata } from './new-sabrehaven-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSabrehavenRulesKeywordPage />;
}
