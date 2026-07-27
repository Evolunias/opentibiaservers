import BestSaintsotServerKeywordPage, { generateMetadata } from './best-saintsot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestSaintsotServerKeywordPage />;
}
