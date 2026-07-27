import CustomRealeraRulesKeywordPage, { generateMetadata } from './custom-realera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRealeraRulesKeywordPage />;
}
