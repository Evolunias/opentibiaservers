import CustomCanobRulesKeywordPage, { generateMetadata } from './custom-canob-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCanobRulesKeywordPage />;
}
