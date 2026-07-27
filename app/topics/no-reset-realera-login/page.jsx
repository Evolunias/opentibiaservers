import NoResetRealeraLoginKeywordPage, { generateMetadata } from './no-reset-realera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetRealeraLoginKeywordPage />;
}
