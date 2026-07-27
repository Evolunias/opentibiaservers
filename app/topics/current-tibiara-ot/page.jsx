import CurrentTibiaraOtKeywordPage, { generateMetadata } from './current-tibiara-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiaraOtKeywordPage />;
}
