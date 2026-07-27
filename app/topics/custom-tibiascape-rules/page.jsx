import CustomTibiascapeRulesKeywordPage, { generateMetadata } from './custom-tibiascape-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiascapeRulesKeywordPage />;
}
