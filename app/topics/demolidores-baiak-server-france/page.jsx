import DemolidoresBaiakServerFranceKeywordPage, { generateMetadata } from './demolidores-baiak-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresBaiakServerFranceKeywordPage />;
}
