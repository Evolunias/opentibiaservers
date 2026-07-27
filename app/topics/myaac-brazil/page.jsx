import MyaacBrazilKeywordPage, { generateMetadata } from './myaac-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MyaacBrazilKeywordPage />;
}
