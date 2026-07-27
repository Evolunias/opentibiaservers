import SaintsotKeywordPage, { generateMetadata } from './saintsot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotKeywordPage />;
}
