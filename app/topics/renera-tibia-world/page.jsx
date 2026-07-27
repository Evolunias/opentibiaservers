import ReneraTibiaWorldKeywordPage, { generateMetadata } from './renera-tibia-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ReneraTibiaWorldKeywordPage />;
}
