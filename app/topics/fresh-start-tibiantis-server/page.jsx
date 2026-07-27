import FreshStartTibiantisServerKeywordPage, { generateMetadata } from './fresh-start-tibiantis-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibiantisServerKeywordPage />;
}
