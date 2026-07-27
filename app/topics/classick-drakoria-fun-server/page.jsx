import ClassickDrakoriaFunServerKeywordPage, { generateMetadata } from './classick-drakoria-fun-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassickDrakoriaFunServerKeywordPage />;
}
