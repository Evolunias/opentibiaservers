import FreshStartElderaTibiaKeywordPage, { generateMetadata } from './fresh-start-eldera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartElderaTibiaKeywordPage />;
}
