import FreshStartXanteriaKeywordPage, { generateMetadata } from './fresh-start-xanteria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartXanteriaKeywordPage />;
}
