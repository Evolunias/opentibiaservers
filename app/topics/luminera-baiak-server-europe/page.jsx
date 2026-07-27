import LumineraBaiakServerEuropeKeywordPage, { generateMetadata } from './luminera-baiak-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraBaiakServerEuropeKeywordPage />;
}
