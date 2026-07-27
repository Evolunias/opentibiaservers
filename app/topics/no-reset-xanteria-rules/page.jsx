import NoResetXanteriaRulesKeywordPage, { generateMetadata } from './no-reset-xanteria-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetXanteriaRulesKeywordPage />;
}
