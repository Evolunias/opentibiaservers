import TopNostaltherKeywordPage, { generateMetadata } from './top-nostalther';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNostaltherKeywordPage />;
}
