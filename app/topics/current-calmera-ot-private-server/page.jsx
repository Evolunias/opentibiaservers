import CurrentCalmeraOtPrivateServerKeywordPage, { generateMetadata } from './current-calmera-ot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCalmeraOtPrivateServerKeywordPage />;
}
