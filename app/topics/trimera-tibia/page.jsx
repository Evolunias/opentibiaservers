import TrimeraTibiaKeywordPage, { generateMetadata } from './trimera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrimeraTibiaKeywordPage />;
}
