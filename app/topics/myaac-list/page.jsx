import MyaacListKeywordPage, { generateMetadata } from './myaac-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MyaacListKeywordPage />;
}
