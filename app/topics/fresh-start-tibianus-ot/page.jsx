import FreshStartTibianusOtKeywordPage, { generateMetadata } from './fresh-start-tibianus-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibianusOtKeywordPage />;
}
