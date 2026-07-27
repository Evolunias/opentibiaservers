import CurrentSabrehavenRulesKeywordPage, { generateMetadata } from './current-sabrehaven-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentSabrehavenRulesKeywordPage />;
}
