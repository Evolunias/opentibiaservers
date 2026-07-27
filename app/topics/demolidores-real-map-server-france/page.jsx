import DemolidoresRealMapServerFranceKeywordPage, { generateMetadata } from './demolidores-real-map-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresRealMapServerFranceKeywordPage />;
}
