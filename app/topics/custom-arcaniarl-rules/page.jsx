import CustomArcaniarlRulesKeywordPage, { generateMetadata } from './custom-arcaniarl-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomArcaniarlRulesKeywordPage />;
}
