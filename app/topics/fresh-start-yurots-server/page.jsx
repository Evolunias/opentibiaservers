import FreshStartYurotsServerKeywordPage, { generateMetadata } from './fresh-start-yurots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartYurotsServerKeywordPage />;
}
