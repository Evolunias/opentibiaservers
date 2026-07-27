import CurrentBlazeraOtServerKeywordPage, { generateMetadata } from './current-blazera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentBlazeraOtServerKeywordPage />;
}
