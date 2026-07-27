import ActiveMediviaRulesKeywordPage, { generateMetadata } from './active-medivia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMediviaRulesKeywordPage />;
}
