import NewTibiaraOtsKeywordPage, { generateMetadata } from './new-tibiara-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiaraOtsKeywordPage />;
}
