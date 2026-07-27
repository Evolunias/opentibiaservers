import TheForgottenServerClientKeywordPage, { generateMetadata } from './the-forgotten-server-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TheForgottenServerClientKeywordPage />;
}
