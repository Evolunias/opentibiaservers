import PopularNostaltherClientKeywordPage, { generateMetadata } from './popular-nostalther-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNostaltherClientKeywordPage />;
}
