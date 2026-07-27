import PopularNostaltherGuideKeywordPage, { generateMetadata } from './popular-nostalther-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNostaltherGuideKeywordPage />;
}
