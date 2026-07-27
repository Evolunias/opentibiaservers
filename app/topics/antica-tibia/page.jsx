import AnticaTibiaKeywordPage, { generateMetadata } from './antica-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AnticaTibiaKeywordPage />;
}
