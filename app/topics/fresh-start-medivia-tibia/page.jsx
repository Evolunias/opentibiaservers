import FreshStartMediviaTibiaKeywordPage, { generateMetadata } from './fresh-start-medivia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartMediviaTibiaKeywordPage />;
}
