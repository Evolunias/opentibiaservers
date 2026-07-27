import BestSaintsotClientKeywordPage, { generateMetadata } from './best-saintsot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestSaintsotClientKeywordPage />;
}
