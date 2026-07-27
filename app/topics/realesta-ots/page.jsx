import RealestaOtsKeywordPage, { generateMetadata } from './realesta-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaOtsKeywordPage />;
}
