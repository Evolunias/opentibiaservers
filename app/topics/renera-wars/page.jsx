import ReneraWarsKeywordPage, { generateMetadata } from './renera-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ReneraWarsKeywordPage />;
}
