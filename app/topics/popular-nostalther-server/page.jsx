import PopularNostaltherServerKeywordPage, { generateMetadata } from './popular-nostalther-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNostaltherServerKeywordPage />;
}
