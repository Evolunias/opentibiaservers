import AmeriaRulesKeywordPage, { generateMetadata } from './ameria-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaRulesKeywordPage />;
}
