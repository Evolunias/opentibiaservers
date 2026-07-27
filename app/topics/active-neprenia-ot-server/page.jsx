import ActiveNepreniaOtServerKeywordPage, { generateMetadata } from './active-neprenia-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNepreniaOtServerKeywordPage />;
}
