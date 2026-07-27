import ActiveTibijkaTibiaKeywordPage, { generateMetadata } from './active-tibijka-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibijkaTibiaKeywordPage />;
}
