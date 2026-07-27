import NewTibijkaTibiaKeywordPage, { generateMetadata } from './new-tibijka-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibijkaTibiaKeywordPage />;
}
