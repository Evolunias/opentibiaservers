import CurrentZuneraOtOtKeywordPage, { generateMetadata } from './current-zunera-ot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentZuneraOtOtKeywordPage />;
}
