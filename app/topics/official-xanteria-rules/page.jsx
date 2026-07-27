import OfficialXanteriaRulesKeywordPage, { generateMetadata } from './official-xanteria-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialXanteriaRulesKeywordPage />;
}
