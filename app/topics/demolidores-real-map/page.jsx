import DemolidoresRealMapKeywordPage, { generateMetadata } from './demolidores-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresRealMapKeywordPage />;
}
