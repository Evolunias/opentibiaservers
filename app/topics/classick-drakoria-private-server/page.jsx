import ClassickDrakoriaPrivateServerKeywordPage, { generateMetadata } from './classick-drakoria-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassickDrakoriaPrivateServerKeywordPage />;
}
