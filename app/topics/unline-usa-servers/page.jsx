import UnlineUsaServersKeywordPage, { generateMetadata } from './unline-usa-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineUsaServersKeywordPage />;
}
