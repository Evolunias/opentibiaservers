import NewSeasonNoxiousotRulesKeywordPage, { generateMetadata } from './new-season-noxiousot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonNoxiousotRulesKeywordPage />;
}
