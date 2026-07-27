import HarmoniaOt13WithTrainersServerKeywordPage, { generateMetadata } from './harmonia-ot-13-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt13WithTrainersServerKeywordPage />;
}
