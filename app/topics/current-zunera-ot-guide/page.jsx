import CurrentZuneraOtGuideKeywordPage, { generateMetadata } from './current-zunera-ot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentZuneraOtGuideKeywordPage />;
}
