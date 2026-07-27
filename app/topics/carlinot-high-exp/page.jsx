import CarlinotHighExpKeywordPage, { generateMetadata } from './carlinot-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotHighExpKeywordPage />;
}
