import UnlineEuropeServersKeywordPage, { generateMetadata } from './unline-europe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineEuropeServersKeywordPage />;
}
