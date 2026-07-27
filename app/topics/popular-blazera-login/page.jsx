import PopularBlazeraLoginKeywordPage, { generateMetadata } from './popular-blazera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularBlazeraLoginKeywordPage />;
}
