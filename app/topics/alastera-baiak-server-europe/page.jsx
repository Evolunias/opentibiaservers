import AlasteraBaiakServerEuropeKeywordPage, { generateMetadata } from './alastera-baiak-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraBaiakServerEuropeKeywordPage />;
}
