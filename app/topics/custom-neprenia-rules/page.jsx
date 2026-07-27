import CustomNepreniaRulesKeywordPage, { generateMetadata } from './custom-neprenia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNepreniaRulesKeywordPage />;
}
