import OriginaltibiaTibiaKeywordPage, { generateMetadata } from './originaltibia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaTibiaKeywordPage />;
}
