import HighrateCoxaotRulesKeywordPage, { generateMetadata } from './highrate-coxaot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCoxaotRulesKeywordPage />;
}
