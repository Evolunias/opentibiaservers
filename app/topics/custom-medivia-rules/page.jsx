import CustomMediviaRulesKeywordPage, { generateMetadata } from './custom-medivia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMediviaRulesKeywordPage />;
}
