import FreshStartSabrehavenRulesKeywordPage, { generateMetadata } from './fresh-start-sabrehaven-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartSabrehavenRulesKeywordPage />;
}
