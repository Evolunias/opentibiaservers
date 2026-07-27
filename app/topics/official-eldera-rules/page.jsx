import OfficialElderaRulesKeywordPage, { generateMetadata } from './official-eldera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialElderaRulesKeywordPage />;
}
