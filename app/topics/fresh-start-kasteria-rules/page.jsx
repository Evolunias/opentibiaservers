import FreshStartKasteriaRulesKeywordPage, { generateMetadata } from './fresh-start-kasteria-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartKasteriaRulesKeywordPage />;
}
