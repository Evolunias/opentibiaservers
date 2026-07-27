import FreshStartSaintsotKeywordPage, { generateMetadata } from './fresh-start-saintsot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartSaintsotKeywordPage />;
}
