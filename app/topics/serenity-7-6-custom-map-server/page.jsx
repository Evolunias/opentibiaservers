import Serenity76CustomMapServerKeywordPage, { generateMetadata } from './serenity-7-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity76CustomMapServerKeywordPage />;
}
