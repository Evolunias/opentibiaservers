import CurrentRealeraOtServerKeywordPage, { generateMetadata } from './current-realera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRealeraOtServerKeywordPage />;
}
