import SabrehavenRulesKeywordPage, { generateMetadata } from './sabrehaven-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenRulesKeywordPage />;
}
