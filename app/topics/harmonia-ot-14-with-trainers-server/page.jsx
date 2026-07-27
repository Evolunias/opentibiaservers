import HarmoniaOt14WithTrainersServerKeywordPage, { generateMetadata } from './harmonia-ot-14-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt14WithTrainersServerKeywordPage />;
}
