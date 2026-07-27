import ReneraServerKeywordPage, { generateMetadata } from './renera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ReneraServerKeywordPage />;
}
