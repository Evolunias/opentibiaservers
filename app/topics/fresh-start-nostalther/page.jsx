import FreshStartNostaltherKeywordPage, { generateMetadata } from './fresh-start-nostalther';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartNostaltherKeywordPage />;
}
