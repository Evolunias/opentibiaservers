import LuceraTibiaKeywordPage, { generateMetadata } from './lucera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LuceraTibiaKeywordPage />;
}
