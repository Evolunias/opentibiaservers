import TopSabrehavenRulesKeywordPage, { generateMetadata } from './top-sabrehaven-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopSabrehavenRulesKeywordPage />;
}
