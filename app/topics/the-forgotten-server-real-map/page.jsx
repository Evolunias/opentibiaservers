import TheForgottenServerRealMapKeywordPage, { generateMetadata } from './the-forgotten-server-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TheForgottenServerRealMapKeywordPage />;
}
