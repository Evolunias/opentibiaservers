import FreshStartClassicusOtServerKeywordPage, { generateMetadata } from './fresh-start-classicus-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartClassicusOtServerKeywordPage />;
}
