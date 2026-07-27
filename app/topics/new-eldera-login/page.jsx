import NewElderaLoginKeywordPage, { generateMetadata } from './new-eldera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewElderaLoginKeywordPage />;
}
