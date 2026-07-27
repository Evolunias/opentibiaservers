import HighrateNostaltherGuideKeywordPage, { generateMetadata } from './highrate-nostalther-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateNostaltherGuideKeywordPage />;
}
