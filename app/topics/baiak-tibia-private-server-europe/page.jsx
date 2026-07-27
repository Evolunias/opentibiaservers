import BaiakTibiaPrivateServerEuropeKeywordPage, { generateMetadata } from './baiak-tibia-private-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakTibiaPrivateServerEuropeKeywordPage />;
}
