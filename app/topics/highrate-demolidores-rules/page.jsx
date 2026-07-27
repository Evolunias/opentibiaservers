import HighrateDemolidoresRulesKeywordPage, { generateMetadata } from './highrate-demolidores-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateDemolidoresRulesKeywordPage />;
}
