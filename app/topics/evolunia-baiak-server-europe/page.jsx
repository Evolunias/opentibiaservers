import EvoluniaBaiakServerEuropeKeywordPage, { generateMetadata } from './evolunia-baiak-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaBaiakServerEuropeKeywordPage />;
}
