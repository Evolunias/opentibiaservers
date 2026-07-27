import OfficialOlderaLoginKeywordPage, { generateMetadata } from './official-oldera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialOlderaLoginKeywordPage />;
}
