import ForgottenServerUsaKeywordPage, { generateMetadata } from './forgotten-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ForgottenServerUsaKeywordPage />;
}
