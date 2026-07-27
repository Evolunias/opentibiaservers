import BaiakOpenTibiaServerBrazilKeywordPage, { generateMetadata } from './baiak-open-tibia-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakOpenTibiaServerBrazilKeywordPage />;
}
