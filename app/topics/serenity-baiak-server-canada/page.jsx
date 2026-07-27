import SerenityBaiakServerCanadaKeywordPage, { generateMetadata } from './serenity-baiak-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityBaiakServerCanadaKeywordPage />;
}
