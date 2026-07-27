import ActiveElderaLoginKeywordPage, { generateMetadata } from './active-eldera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveElderaLoginKeywordPage />;
}
