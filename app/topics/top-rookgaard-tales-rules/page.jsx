import TopRookgaardTalesRulesKeywordPage, { generateMetadata } from './top-rookgaard-tales-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRookgaardTalesRulesKeywordPage />;
}
