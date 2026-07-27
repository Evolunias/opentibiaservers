import FreshStartThorniaOtServerKeywordPage, { generateMetadata } from './fresh-start-thornia-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartThorniaOtServerKeywordPage />;
}
