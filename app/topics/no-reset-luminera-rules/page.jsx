import NoResetLumineraRulesKeywordPage, { generateMetadata } from './no-reset-luminera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetLumineraRulesKeywordPage />;
}
