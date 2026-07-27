import BestOpenTibiaServerListKeywordPage, { generateMetadata } from './best-open-tibia-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestOpenTibiaServerListKeywordPage />;
}
