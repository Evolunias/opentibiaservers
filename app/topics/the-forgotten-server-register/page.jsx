import TheForgottenServerRegisterKeywordPage, { generateMetadata } from './the-forgotten-server-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TheForgottenServerRegisterKeywordPage />;
}
