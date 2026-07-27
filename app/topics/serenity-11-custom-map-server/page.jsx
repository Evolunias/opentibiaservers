import Serenity11CustomMapServerKeywordPage, { generateMetadata } from './serenity-11-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity11CustomMapServerKeywordPage />;
}
