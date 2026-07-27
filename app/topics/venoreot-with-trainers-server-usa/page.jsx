import VenoreotWithTrainersServerUsaKeywordPage, { generateMetadata } from './venoreot-with-trainers-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotWithTrainersServerUsaKeywordPage />;
}
