import NewRealeraGuideKeywordPage, { generateMetadata } from './new-realera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRealeraGuideKeywordPage />;
}
