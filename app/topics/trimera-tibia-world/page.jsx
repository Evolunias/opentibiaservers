import TrimeraTibiaWorldKeywordPage, { generateMetadata } from './trimera-tibia-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrimeraTibiaWorldKeywordPage />;
}
