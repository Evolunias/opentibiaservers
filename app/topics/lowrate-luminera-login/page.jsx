import LowrateLumineraLoginKeywordPage, { generateMetadata } from './lowrate-luminera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateLumineraLoginKeywordPage />;
}
