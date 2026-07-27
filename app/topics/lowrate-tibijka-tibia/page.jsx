import LowrateTibijkaTibiaKeywordPage, { generateMetadata } from './lowrate-tibijka-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibijkaTibiaKeywordPage />;
}
