import FreshStartElderaOpenTibiaKeywordPage, { generateMetadata } from './fresh-start-eldera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartElderaOpenTibiaKeywordPage />;
}
