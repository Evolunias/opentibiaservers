import TopRealeraLoginKeywordPage, { generateMetadata } from './top-realera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRealeraLoginKeywordPage />;
}
