import CustomMapDemolidoresServerKeywordPage, { generateMetadata } from './custom-map-demolidores-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapDemolidoresServerKeywordPage />;
}
