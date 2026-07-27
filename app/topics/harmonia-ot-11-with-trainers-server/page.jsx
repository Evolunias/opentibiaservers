import HarmoniaOt11WithTrainersServerKeywordPage, { generateMetadata } from './harmonia-ot-11-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt11WithTrainersServerKeywordPage />;
}
