import SecuraOpenPvpKeywordPage, { generateMetadata } from './secura-open-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SecuraOpenPvpKeywordPage />;
}
