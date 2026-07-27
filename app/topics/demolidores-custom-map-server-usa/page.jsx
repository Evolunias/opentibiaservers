import DemolidoresCustomMapServerUsaKeywordPage, { generateMetadata } from './demolidores-custom-map-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresCustomMapServerUsaKeywordPage />;
}
