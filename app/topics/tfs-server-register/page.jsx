import TfsServerRegisterKeywordPage, { generateMetadata } from './tfs-server-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TfsServerRegisterKeywordPage />;
}
