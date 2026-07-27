import MyaacClientKeywordPage, { generateMetadata } from './myaac-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MyaacClientKeywordPage />;
}
