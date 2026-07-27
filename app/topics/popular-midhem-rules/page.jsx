import PopularMidhemRulesKeywordPage, { generateMetadata } from './popular-midhem-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMidhemRulesKeywordPage />;
}
