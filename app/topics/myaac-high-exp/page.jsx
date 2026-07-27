import MyaacHighExpKeywordPage, { generateMetadata } from './myaac-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MyaacHighExpKeywordPage />;
}
