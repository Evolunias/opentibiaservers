import LowrateTibianusRulesKeywordPage, { generateMetadata } from './lowrate-tibianus-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibianusRulesKeywordPage />;
}
