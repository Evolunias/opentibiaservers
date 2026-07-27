import FreshStartXanteriaServerKeywordPage, { generateMetadata } from './fresh-start-xanteria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartXanteriaServerKeywordPage />;
}
