import NewTibiaraTibiaKeywordPage, { generateMetadata } from './new-tibiara-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiaraTibiaKeywordPage />;
}
