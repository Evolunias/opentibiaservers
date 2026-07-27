import CustomVenoreotRulesKeywordPage, { generateMetadata } from './custom-venoreot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomVenoreotRulesKeywordPage />;
}
