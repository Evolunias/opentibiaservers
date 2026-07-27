import NewRealeraLoginKeywordPage, { generateMetadata } from './new-realera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRealeraLoginKeywordPage />;
}
