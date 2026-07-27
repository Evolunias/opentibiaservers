import NewRookgaardTalesRulesKeywordPage, { generateMetadata } from './new-rookgaard-tales-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRookgaardTalesRulesKeywordPage />;
}
