import FreshStartElderaKeywordPage, { generateMetadata } from './fresh-start-eldera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartElderaKeywordPage />;
}
