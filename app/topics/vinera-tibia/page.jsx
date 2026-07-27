import VineraTibiaKeywordPage, { generateMetadata } from './vinera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VineraTibiaKeywordPage />;
}
