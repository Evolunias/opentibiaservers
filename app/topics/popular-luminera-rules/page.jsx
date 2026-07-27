import PopularLumineraRulesKeywordPage, { generateMetadata } from './popular-luminera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularLumineraRulesKeywordPage />;
}
