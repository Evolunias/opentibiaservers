import ShiveraWorldKeywordPage, { generateMetadata } from './shivera-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShiveraWorldKeywordPage />;
}
