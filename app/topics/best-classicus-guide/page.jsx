import BestClassicusGuideKeywordPage, { generateMetadata } from './best-classicus-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestClassicusGuideKeywordPage />;
}
