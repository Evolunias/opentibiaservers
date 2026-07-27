import PopularRealeraLoginKeywordPage, { generateMetadata } from './popular-realera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRealeraLoginKeywordPage />;
}
