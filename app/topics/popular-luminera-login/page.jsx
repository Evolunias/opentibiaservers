import PopularLumineraLoginKeywordPage, { generateMetadata } from './popular-luminera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularLumineraLoginKeywordPage />;
}
