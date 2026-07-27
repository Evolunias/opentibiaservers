import CarlinotResetKeywordPage, { generateMetadata } from './carlinot-reset';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotResetKeywordPage />;
}
