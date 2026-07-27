import TheForgottenServerUsaKeywordPage, { generateMetadata } from './the-forgotten-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TheForgottenServerUsaKeywordPage />;
}
