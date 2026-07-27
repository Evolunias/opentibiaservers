import NoResetOlderaLoginKeywordPage, { generateMetadata } from './no-reset-oldera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetOlderaLoginKeywordPage />;
}
