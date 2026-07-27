import Serenity80CustomMapServerKeywordPage, { generateMetadata } from './serenity-8-0-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity80CustomMapServerKeywordPage />;
}
