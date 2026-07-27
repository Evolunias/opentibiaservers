import ActiveNepreniaRulesKeywordPage, { generateMetadata } from './active-neprenia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNepreniaRulesKeywordPage />;
}
