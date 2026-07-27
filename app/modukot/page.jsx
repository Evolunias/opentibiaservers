import ModukotPage, { generateMetadata } from './modukot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ModukotPage />;
}
