import CustomRealestaRulesKeywordPage, { generateMetadata } from './custom-realesta-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRealestaRulesKeywordPage />;
}
