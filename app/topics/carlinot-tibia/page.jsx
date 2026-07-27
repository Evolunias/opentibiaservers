import CarlinotTibiaKeywordPage, { generateMetadata } from './carlinot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotTibiaKeywordPage />;
}
