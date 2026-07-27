import ClassickDrakoriaVipKeywordPage, { generateMetadata } from './classick-drakoria-vip';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassickDrakoriaVipKeywordPage />;
}
