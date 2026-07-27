import CustomTibiaoriginsRulesKeywordPage, { generateMetadata } from './custom-tibiaorigins-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiaoriginsRulesKeywordPage />;
}
