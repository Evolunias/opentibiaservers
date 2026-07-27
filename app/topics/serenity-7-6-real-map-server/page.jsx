import Serenity76RealMapServerKeywordPage, { generateMetadata } from './serenity-7-6-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity76RealMapServerKeywordPage />;
}
