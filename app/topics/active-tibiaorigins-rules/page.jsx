import ActiveTibiaoriginsRulesKeywordPage, { generateMetadata } from './active-tibiaorigins-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiaoriginsRulesKeywordPage />;
}
