import PopularNostaltherKeywordPage, { generateMetadata } from './popular-nostalther';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNostaltherKeywordPage />;
}
