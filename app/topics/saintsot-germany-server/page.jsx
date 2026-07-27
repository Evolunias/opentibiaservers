import SaintsotGermanyServerKeywordPage, { generateMetadata } from './saintsot-germany-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotGermanyServerKeywordPage />;
}
