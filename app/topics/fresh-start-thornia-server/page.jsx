import FreshStartThorniaServerKeywordPage, { generateMetadata } from './fresh-start-thornia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartThorniaServerKeywordPage />;
}
