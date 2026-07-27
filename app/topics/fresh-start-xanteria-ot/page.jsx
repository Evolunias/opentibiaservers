import FreshStartXanteriaOtKeywordPage, { generateMetadata } from './fresh-start-xanteria-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartXanteriaOtKeywordPage />;
}
