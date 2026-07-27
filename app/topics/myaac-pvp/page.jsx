import MyaacPvpKeywordPage, { generateMetadata } from './myaac-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MyaacPvpKeywordPage />;
}
