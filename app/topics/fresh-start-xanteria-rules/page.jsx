import FreshStartXanteriaRulesKeywordPage, { generateMetadata } from './fresh-start-xanteria-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartXanteriaRulesKeywordPage />;
}
