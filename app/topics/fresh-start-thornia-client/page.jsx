import FreshStartThorniaClientKeywordPage, { generateMetadata } from './fresh-start-thornia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartThorniaClientKeywordPage />;
}
