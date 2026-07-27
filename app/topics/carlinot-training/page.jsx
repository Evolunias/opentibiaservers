import CarlinotTrainingKeywordPage, { generateMetadata } from './carlinot-training';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotTrainingKeywordPage />;
}
