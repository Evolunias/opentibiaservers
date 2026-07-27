import CustomElderaRulesKeywordPage, { generateMetadata } from './custom-eldera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomElderaRulesKeywordPage />;
}
