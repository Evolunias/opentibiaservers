import Serenity71CustomMapServerKeywordPage, { generateMetadata } from './serenity-7-1-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity71CustomMapServerKeywordPage />;
}
