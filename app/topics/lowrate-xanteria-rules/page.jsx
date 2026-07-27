import LowrateXanteriaRulesKeywordPage, { generateMetadata } from './lowrate-xanteria-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateXanteriaRulesKeywordPage />;
}
