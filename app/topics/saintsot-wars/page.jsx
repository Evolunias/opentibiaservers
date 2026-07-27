import SaintsotWarsKeywordPage, { generateMetadata } from './saintsot-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotWarsKeywordPage />;
}
