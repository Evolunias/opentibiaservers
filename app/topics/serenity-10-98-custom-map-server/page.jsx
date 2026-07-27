import Serenity1098CustomMapServerKeywordPage, { generateMetadata } from './serenity-10-98-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity1098CustomMapServerKeywordPage />;
}
