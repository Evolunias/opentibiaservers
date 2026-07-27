import ForgottenServerActiveKeywordPage, { generateMetadata } from './forgotten-server-active';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ForgottenServerActiveKeywordPage />;
}
