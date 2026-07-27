import OfficialRookgaardTalesRulesKeywordPage, { generateMetadata } from './official-rookgaard-tales-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRookgaardTalesRulesKeywordPage />;
}
