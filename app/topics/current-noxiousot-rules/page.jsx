import CurrentNoxiousotRulesKeywordPage, { generateMetadata } from './current-noxiousot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNoxiousotRulesKeywordPage />;
}
