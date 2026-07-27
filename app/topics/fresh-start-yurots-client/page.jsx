import FreshStartYurotsClientKeywordPage, { generateMetadata } from './fresh-start-yurots-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartYurotsClientKeywordPage />;
}
