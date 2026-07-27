import NostaltherGuideKeywordPage, { generateMetadata } from './nostalther-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherGuideKeywordPage />;
}
