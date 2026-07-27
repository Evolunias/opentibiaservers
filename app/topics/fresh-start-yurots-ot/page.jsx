import FreshStartYurotsOtKeywordPage, { generateMetadata } from './fresh-start-yurots-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartYurotsOtKeywordPage />;
}
