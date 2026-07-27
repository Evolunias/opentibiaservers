import MyaacGermanyKeywordPage, { generateMetadata } from './myaac-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MyaacGermanyKeywordPage />;
}
