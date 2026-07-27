import MeneraWorldKeywordPage, { generateMetadata } from './menera-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MeneraWorldKeywordPage />;
}
