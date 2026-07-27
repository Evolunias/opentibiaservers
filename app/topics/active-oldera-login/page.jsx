import ActiveOlderaLoginKeywordPage, { generateMetadata } from './active-oldera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveOlderaLoginKeywordPage />;
}
