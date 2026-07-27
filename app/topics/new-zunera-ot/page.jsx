import NewZuneraOtKeywordPage, { generateMetadata } from './new-zunera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewZuneraOtKeywordPage />;
}
