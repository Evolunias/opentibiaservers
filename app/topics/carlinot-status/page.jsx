import CarlinotStatusKeywordPage, { generateMetadata } from './carlinot-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotStatusKeywordPage />;
}
