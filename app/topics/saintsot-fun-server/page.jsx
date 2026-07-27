import SaintsotFunServerKeywordPage, { generateMetadata } from './saintsot-fun-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotFunServerKeywordPage />;
}
