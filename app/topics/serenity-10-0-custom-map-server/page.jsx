import Serenity100CustomMapServerKeywordPage, { generateMetadata } from './serenity-10-0-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity100CustomMapServerKeywordPage />;
}
