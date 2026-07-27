import ActiveNoxiousotRulesKeywordPage, { generateMetadata } from './active-noxiousot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNoxiousotRulesKeywordPage />;
}
