import HighrateTibianusRulesKeywordPage, { generateMetadata } from './highrate-tibianus-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibianusRulesKeywordPage />;
}
