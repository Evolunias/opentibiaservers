import PopularThorniaGuideKeywordPage, { generateMetadata } from './popular-thornia-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularThorniaGuideKeywordPage />;
}
