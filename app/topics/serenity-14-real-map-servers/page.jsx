import Serenity14RealMapServersKeywordPage, { generateMetadata } from './serenity-14-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity14RealMapServersKeywordPage />;
}
