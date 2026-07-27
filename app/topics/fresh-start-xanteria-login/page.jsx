import FreshStartXanteriaLoginKeywordPage, { generateMetadata } from './fresh-start-xanteria-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartXanteriaLoginKeywordPage />;
}
