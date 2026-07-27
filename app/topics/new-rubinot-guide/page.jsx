import NewRubinotGuideKeywordPage, { generateMetadata } from './new-rubinot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRubinotGuideKeywordPage />;
}
