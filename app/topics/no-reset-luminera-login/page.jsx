import NoResetLumineraLoginKeywordPage, { generateMetadata } from './no-reset-luminera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetLumineraLoginKeywordPage />;
}
