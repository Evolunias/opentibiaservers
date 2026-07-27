import OfficialElderaLoginKeywordPage, { generateMetadata } from './official-eldera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialElderaLoginKeywordPage />;
}
