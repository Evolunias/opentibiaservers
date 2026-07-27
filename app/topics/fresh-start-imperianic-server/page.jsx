import FreshStartImperianicServerKeywordPage, { generateMetadata } from './fresh-start-imperianic-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartImperianicServerKeywordPage />;
}
