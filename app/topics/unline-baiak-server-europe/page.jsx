import UnlineBaiakServerEuropeKeywordPage, { generateMetadata } from './unline-baiak-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineBaiakServerEuropeKeywordPage />;
}
