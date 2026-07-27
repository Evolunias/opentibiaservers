import CustomTibiaraRulesKeywordPage, { generateMetadata } from './custom-tibiara-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiaraRulesKeywordPage />;
}
