import BestClassicusOtsKeywordPage, { generateMetadata } from './best-classicus-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestClassicusOtsKeywordPage />;
}
