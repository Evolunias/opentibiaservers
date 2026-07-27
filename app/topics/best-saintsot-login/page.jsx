import BestSaintsotLoginKeywordPage, { generateMetadata } from './best-saintsot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestSaintsotLoginKeywordPage />;
}
