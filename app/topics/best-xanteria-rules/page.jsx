import BestXanteriaRulesKeywordPage, { generateMetadata } from './best-xanteria-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestXanteriaRulesKeywordPage />;
}
