import HighrateBlazeraRulesKeywordPage, { generateMetadata } from './highrate-blazera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateBlazeraRulesKeywordPage />;
}
