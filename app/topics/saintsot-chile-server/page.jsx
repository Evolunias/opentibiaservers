import SaintsotChileServerKeywordPage, { generateMetadata } from './saintsot-chile-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotChileServerKeywordPage />;
}
