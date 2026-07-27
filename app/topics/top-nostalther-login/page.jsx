import TopNostaltherLoginKeywordPage, { generateMetadata } from './top-nostalther-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNostaltherLoginKeywordPage />;
}
