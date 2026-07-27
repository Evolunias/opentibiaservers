import NewZuneraOtOtsKeywordPage, { generateMetadata } from './new-zunera-ot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewZuneraOtOtsKeywordPage />;
}
