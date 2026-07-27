import NewLumineraLoginKeywordPage, { generateMetadata } from './new-luminera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewLumineraLoginKeywordPage />;
}
