import NewRealeraOtServerKeywordPage, { generateMetadata } from './new-realera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRealeraOtServerKeywordPage />;
}
