import Serenity80RealMapServerKeywordPage, { generateMetadata } from './serenity-8-0-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity80RealMapServerKeywordPage />;
}
