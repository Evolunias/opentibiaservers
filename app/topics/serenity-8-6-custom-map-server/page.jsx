import Serenity86CustomMapServerKeywordPage, { generateMetadata } from './serenity-8-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity86CustomMapServerKeywordPage />;
}
