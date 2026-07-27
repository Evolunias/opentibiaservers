import BaiakOpenTibiaServerLatinAmericaKeywordPage, { generateMetadata } from './baiak-open-tibia-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakOpenTibiaServerLatinAmericaKeywordPage />;
}
