import TopNostaltherPrivateServerKeywordPage, { generateMetadata } from './top-nostalther-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNostaltherPrivateServerKeywordPage />;
}
