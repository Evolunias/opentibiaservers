import CustomXanteriaRulesKeywordPage, { generateMetadata } from './custom-xanteria-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomXanteriaRulesKeywordPage />;
}
