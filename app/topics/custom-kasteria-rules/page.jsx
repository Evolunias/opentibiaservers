import CustomKasteriaRulesKeywordPage, { generateMetadata } from './custom-kasteria-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomKasteriaRulesKeywordPage />;
}
