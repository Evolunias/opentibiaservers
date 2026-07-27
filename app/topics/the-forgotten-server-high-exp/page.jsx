import TheForgottenServerHighExpKeywordPage, { generateMetadata } from './the-forgotten-server-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TheForgottenServerHighExpKeywordPage />;
}
