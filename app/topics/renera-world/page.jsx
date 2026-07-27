import ReneraWorldKeywordPage, { generateMetadata } from './renera-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ReneraWorldKeywordPage />;
}
