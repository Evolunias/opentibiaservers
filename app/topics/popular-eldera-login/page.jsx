import PopularElderaLoginKeywordPage, { generateMetadata } from './popular-eldera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularElderaLoginKeywordPage />;
}
