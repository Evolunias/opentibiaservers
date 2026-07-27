import PopularTibiaoriginsRulesKeywordPage, { generateMetadata } from './popular-tibiaorigins-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiaoriginsRulesKeywordPage />;
}
