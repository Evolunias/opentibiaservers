import ActiveElderaRulesKeywordPage, { generateMetadata } from './active-eldera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveElderaRulesKeywordPage />;
}
