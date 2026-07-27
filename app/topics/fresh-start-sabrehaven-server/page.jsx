import FreshStartSabrehavenServerKeywordPage, { generateMetadata } from './fresh-start-sabrehaven-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartSabrehavenServerKeywordPage />;
}
