import FreshStartKasteriaKeywordPage, { generateMetadata } from './fresh-start-kasteria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartKasteriaKeywordPage />;
}
