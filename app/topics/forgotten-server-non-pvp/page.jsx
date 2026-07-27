import ForgottenServerNonPvpKeywordPage, { generateMetadata } from './forgotten-server-non-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ForgottenServerNonPvpKeywordPage />;
}
