import UnlinePolandServersKeywordPage, { generateMetadata } from './unline-poland-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlinePolandServersKeywordPage />;
}
