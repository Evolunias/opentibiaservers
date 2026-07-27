import FreshStartThorniaKeywordPage, { generateMetadata } from './fresh-start-thornia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartThorniaKeywordPage />;
}
