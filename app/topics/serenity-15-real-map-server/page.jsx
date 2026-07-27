import Serenity15RealMapServerKeywordPage, { generateMetadata } from './serenity-15-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity15RealMapServerKeywordPage />;
}
