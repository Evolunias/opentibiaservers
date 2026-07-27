import HarmoniaOt100WithTrainersServerKeywordPage, { generateMetadata } from './harmonia-ot-10-0-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt100WithTrainersServerKeywordPage />;
}
