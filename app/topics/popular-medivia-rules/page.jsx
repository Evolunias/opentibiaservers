import PopularMediviaRulesKeywordPage, { generateMetadata } from './popular-medivia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMediviaRulesKeywordPage />;
}
