import CustomNilotRulesKeywordPage, { generateMetadata } from './custom-nilot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNilotRulesKeywordPage />;
}
