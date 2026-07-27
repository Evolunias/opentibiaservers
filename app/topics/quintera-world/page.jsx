import QuinteraWorldKeywordPage, { generateMetadata } from './quintera-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <QuinteraWorldKeywordPage />;
}
