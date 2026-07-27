import NoResetNepreniaRulesKeywordPage, { generateMetadata } from './no-reset-neprenia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetNepreniaRulesKeywordPage />;
}
