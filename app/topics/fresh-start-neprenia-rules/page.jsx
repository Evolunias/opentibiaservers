import FreshStartNepreniaRulesKeywordPage, { generateMetadata } from './fresh-start-neprenia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartNepreniaRulesKeywordPage />;
}
