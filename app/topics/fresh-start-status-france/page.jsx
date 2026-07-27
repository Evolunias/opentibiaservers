import FreshStartStatusFranceKeywordPage, { generateMetadata } from './fresh-start-status-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartStatusFranceKeywordPage />;
}
