import FreshStartServersUsaKeywordPage, { generateMetadata } from './fresh-start-servers-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartServersUsaKeywordPage />;
}
