import Serenity13RealMapServerKeywordPage, { generateMetadata } from './serenity-13-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity13RealMapServerKeywordPage />;
}
