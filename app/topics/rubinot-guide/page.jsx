import RubinotGuideKeywordPage, { generateMetadata } from './rubinot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotGuideKeywordPage />;
}
