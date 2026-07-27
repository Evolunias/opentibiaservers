import PaceraWorldKeywordPage, { generateMetadata } from './pacera-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PaceraWorldKeywordPage />;
}
