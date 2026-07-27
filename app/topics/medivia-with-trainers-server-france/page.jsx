import MediviaWithTrainersServerFranceKeywordPage, { generateMetadata } from './medivia-with-trainers-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaWithTrainersServerFranceKeywordPage />;
}
