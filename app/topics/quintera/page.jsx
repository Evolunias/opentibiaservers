import QuinteraKeywordPage, { generateMetadata } from './quintera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <QuinteraKeywordPage />;
}
