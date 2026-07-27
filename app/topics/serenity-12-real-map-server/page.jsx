import Serenity12RealMapServerKeywordPage, { generateMetadata } from './serenity-12-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity12RealMapServerKeywordPage />;
}
