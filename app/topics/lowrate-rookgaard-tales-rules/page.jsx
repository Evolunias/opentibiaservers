import LowrateRookgaardTalesRulesKeywordPage, { generateMetadata } from './lowrate-rookgaard-tales-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateRookgaardTalesRulesKeywordPage />;
}
