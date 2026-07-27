import SaintsotHighExpKeywordPage, { generateMetadata } from './saintsot-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotHighExpKeywordPage />;
}
