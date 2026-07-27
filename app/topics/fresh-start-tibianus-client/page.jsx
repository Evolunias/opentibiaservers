import FreshStartTibianusClientKeywordPage, { generateMetadata } from './fresh-start-tibianus-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibianusClientKeywordPage />;
}
