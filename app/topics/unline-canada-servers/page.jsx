import UnlineCanadaServersKeywordPage, { generateMetadata } from './unline-canada-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineCanadaServersKeywordPage />;
}
