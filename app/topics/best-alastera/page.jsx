import BestAlasteraKeywordPage, { generateMetadata } from './best-alastera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestAlasteraKeywordPage />;
}
