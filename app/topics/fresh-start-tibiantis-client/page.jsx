import FreshStartTibiantisClientKeywordPage, { generateMetadata } from './fresh-start-tibiantis-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibiantisClientKeywordPage />;
}
