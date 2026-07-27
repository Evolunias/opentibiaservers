import MyaacActiveKeywordPage, { generateMetadata } from './myaac-active';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MyaacActiveKeywordPage />;
}
