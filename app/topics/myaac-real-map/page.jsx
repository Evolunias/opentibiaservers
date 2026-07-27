import MyaacRealMapKeywordPage, { generateMetadata } from './myaac-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MyaacRealMapKeywordPage />;
}
