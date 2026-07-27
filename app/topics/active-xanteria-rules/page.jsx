import ActiveXanteriaRulesKeywordPage, { generateMetadata } from './active-xanteria-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveXanteriaRulesKeywordPage />;
}
