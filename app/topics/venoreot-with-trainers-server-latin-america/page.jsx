import VenoreotWithTrainersServerLatinAmericaKeywordPage, { generateMetadata } from './venoreot-with-trainers-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotWithTrainersServerLatinAmericaKeywordPage />;
}
