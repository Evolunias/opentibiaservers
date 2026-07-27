import CustomSaintsotRulesKeywordPage, { generateMetadata } from './custom-saintsot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomSaintsotRulesKeywordPage />;
}
