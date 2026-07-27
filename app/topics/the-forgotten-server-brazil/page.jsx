import TheForgottenServerBrazilKeywordPage, { generateMetadata } from './the-forgotten-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TheForgottenServerBrazilKeywordPage />;
}
