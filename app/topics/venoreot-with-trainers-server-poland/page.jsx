import VenoreotWithTrainersServerPolandKeywordPage, { generateMetadata } from './venoreot-with-trainers-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotWithTrainersServerPolandKeywordPage />;
}
