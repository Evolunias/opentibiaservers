import FreshStartTibianusOtsKeywordPage, { generateMetadata } from './fresh-start-tibianus-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibianusOtsKeywordPage />;
}
