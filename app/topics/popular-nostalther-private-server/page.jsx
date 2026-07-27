import PopularNostaltherPrivateServerKeywordPage, { generateMetadata } from './popular-nostalther-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNostaltherPrivateServerKeywordPage />;
}
