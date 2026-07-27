import FreshStartOlderaTibiaKeywordPage, { generateMetadata } from './fresh-start-oldera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartOlderaTibiaKeywordPage />;
}
