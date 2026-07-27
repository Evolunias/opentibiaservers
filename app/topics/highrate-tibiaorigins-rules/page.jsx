import HighrateTibiaoriginsRulesKeywordPage, { generateMetadata } from './highrate-tibiaorigins-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiaoriginsRulesKeywordPage />;
}
