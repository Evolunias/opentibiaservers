import NepreniaOtServerKeywordPage, { generateMetadata } from './neprenia-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaOtServerKeywordPage />;
}
