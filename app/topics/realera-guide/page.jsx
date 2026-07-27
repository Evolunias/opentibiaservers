import RealeraGuideKeywordPage, { generateMetadata } from './realera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraGuideKeywordPage />;
}
