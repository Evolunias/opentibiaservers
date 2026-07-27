import CarlinotOtServerKeywordPage, { generateMetadata } from './carlinot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotOtServerKeywordPage />;
}
