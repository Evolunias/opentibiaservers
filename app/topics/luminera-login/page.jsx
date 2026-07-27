import LumineraLoginKeywordPage, { generateMetadata } from './luminera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraLoginKeywordPage />;
}
