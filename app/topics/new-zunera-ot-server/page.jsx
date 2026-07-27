import NewZuneraOtServerKeywordPage, { generateMetadata } from './new-zunera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewZuneraOtServerKeywordPage />;
}
