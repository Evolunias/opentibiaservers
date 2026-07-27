import HighrateMediviaTibiaKeywordPage, { generateMetadata } from './highrate-medivia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMediviaTibiaKeywordPage />;
}
