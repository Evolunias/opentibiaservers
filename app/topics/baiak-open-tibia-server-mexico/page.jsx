import BaiakOpenTibiaServerMexicoKeywordPage, { generateMetadata } from './baiak-open-tibia-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakOpenTibiaServerMexicoKeywordPage />;
}
