import NewNostaltherGuideKeywordPage, { generateMetadata } from './new-nostalther-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNostaltherGuideKeywordPage />;
}
