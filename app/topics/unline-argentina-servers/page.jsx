import UnlineArgentinaServersKeywordPage, { generateMetadata } from './unline-argentina-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineArgentinaServersKeywordPage />;
}
