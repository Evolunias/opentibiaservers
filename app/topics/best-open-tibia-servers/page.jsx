import BestOpenTibiaServersKeywordPage, { generateMetadata } from './best-open-tibia-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestOpenTibiaServersKeywordPage />;
}
