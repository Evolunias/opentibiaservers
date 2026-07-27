import FreshStartNostaltherServerKeywordPage, { generateMetadata } from './fresh-start-nostalther-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartNostaltherServerKeywordPage />;
}
