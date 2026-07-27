import FreshStartSaintsotServerKeywordPage, { generateMetadata } from './fresh-start-saintsot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartSaintsotServerKeywordPage />;
}
