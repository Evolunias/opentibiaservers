import MyaacPolandKeywordPage, { generateMetadata } from './myaac-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MyaacPolandKeywordPage />;
}
