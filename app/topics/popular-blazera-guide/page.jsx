import PopularBlazeraGuideKeywordPage, { generateMetadata } from './popular-blazera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularBlazeraGuideKeywordPage />;
}
