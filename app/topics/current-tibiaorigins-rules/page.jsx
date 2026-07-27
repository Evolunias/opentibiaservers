import CurrentTibiaoriginsRulesKeywordPage, { generateMetadata } from './current-tibiaorigins-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiaoriginsRulesKeywordPage />;
}
