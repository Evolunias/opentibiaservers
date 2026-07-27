import Serenity96CustomMapServerKeywordPage, { generateMetadata } from './serenity-9-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity96CustomMapServerKeywordPage />;
}
