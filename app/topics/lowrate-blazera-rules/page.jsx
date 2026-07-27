import LowrateBlazeraRulesKeywordPage, { generateMetadata } from './lowrate-blazera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateBlazeraRulesKeywordPage />;
}
