import TheForgottenServerActiveKeywordPage, { generateMetadata } from './the-forgotten-server-active';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TheForgottenServerActiveKeywordPage />;
}
