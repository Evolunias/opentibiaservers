import SaintsotPolandServerKeywordPage, { generateMetadata } from './saintsot-poland-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotPolandServerKeywordPage />;
}
