import SaintsotArgentinaServerKeywordPage, { generateMetadata } from './saintsot-argentina-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotArgentinaServerKeywordPage />;
}
