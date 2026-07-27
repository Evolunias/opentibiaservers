import Serenity13CustomMapServerKeywordPage, { generateMetadata } from './serenity-13-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity13CustomMapServerKeywordPage />;
}
