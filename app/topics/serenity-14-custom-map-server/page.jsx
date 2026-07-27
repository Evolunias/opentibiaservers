import Serenity14CustomMapServerKeywordPage, { generateMetadata } from './serenity-14-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity14CustomMapServerKeywordPage />;
}
