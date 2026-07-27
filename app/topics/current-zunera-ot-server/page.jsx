import CurrentZuneraOtServerKeywordPage, { generateMetadata } from './current-zunera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentZuneraOtServerKeywordPage />;
}
