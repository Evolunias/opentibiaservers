import FreshStartTibianusServerKeywordPage, { generateMetadata } from './fresh-start-tibianus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibianusServerKeywordPage />;
}
