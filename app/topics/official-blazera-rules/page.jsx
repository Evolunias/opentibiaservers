import OfficialBlazeraRulesKeywordPage, { generateMetadata } from './official-blazera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialBlazeraRulesKeywordPage />;
}
