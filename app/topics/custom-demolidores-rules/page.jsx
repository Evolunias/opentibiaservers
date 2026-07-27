import CustomDemolidoresRulesKeywordPage, { generateMetadata } from './custom-demolidores-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomDemolidoresRulesKeywordPage />;
}
