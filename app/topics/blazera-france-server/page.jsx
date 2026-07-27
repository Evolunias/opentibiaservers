import BlazeraFranceServerKeywordPage, { generateMetadata } from './blazera-france-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraFranceServerKeywordPage />;
}
