import FreshStartTibiantisKeywordPage, { generateMetadata } from './fresh-start-tibiantis';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibiantisKeywordPage />;
}
