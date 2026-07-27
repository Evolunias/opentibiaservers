import SerenityBaiakServerEuropeKeywordPage, { generateMetadata } from './serenity-baiak-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityBaiakServerEuropeKeywordPage />;
}
