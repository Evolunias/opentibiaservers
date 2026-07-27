import FreshStartTibianusLoginKeywordPage, { generateMetadata } from './fresh-start-tibianus-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibianusLoginKeywordPage />;
}
