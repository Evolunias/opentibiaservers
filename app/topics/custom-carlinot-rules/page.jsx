import CustomCarlinotRulesKeywordPage, { generateMetadata } from './custom-carlinot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCarlinotRulesKeywordPage />;
}
