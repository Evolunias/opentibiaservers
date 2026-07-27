import FreshStartThorniaOtsKeywordPage, { generateMetadata } from './fresh-start-thornia-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartThorniaOtsKeywordPage />;
}
