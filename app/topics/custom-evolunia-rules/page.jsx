import CustomEvoluniaRulesKeywordPage, { generateMetadata } from './custom-evolunia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomEvoluniaRulesKeywordPage />;
}
