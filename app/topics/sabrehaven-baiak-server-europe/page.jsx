import SabrehavenBaiakServerEuropeKeywordPage, { generateMetadata } from './sabrehaven-baiak-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenBaiakServerEuropeKeywordPage />;
}
