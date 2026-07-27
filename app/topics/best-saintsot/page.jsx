import BestSaintsotKeywordPage, { generateMetadata } from './best-saintsot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestSaintsotKeywordPage />;
}
