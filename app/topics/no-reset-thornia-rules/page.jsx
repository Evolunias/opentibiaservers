import NoResetThorniaRulesKeywordPage, { generateMetadata } from './no-reset-thornia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetThorniaRulesKeywordPage />;
}
