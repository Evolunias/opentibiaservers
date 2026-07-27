import CarlinotOtsKeywordPage, { generateMetadata } from './carlinot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotOtsKeywordPage />;
}
