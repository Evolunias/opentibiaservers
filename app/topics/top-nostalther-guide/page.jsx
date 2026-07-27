import TopNostaltherGuideKeywordPage, { generateMetadata } from './top-nostalther-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNostaltherGuideKeywordPage />;
}
