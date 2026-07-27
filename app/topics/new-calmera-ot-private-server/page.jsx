import NewCalmeraOtPrivateServerKeywordPage, { generateMetadata } from './new-calmera-ot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCalmeraOtPrivateServerKeywordPage />;
}
