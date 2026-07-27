import CustomMarolaotRulesKeywordPage, { generateMetadata } from './custom-marolaot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMarolaotRulesKeywordPage />;
}
