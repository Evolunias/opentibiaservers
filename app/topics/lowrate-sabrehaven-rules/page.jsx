import LowrateSabrehavenRulesKeywordPage, { generateMetadata } from './lowrate-sabrehaven-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateSabrehavenRulesKeywordPage />;
}
