import HarmoniaOt12WithTrainersServerKeywordPage, { generateMetadata } from './harmonia-ot-12-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt12WithTrainersServerKeywordPage />;
}
