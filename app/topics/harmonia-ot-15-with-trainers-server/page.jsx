import HarmoniaOt15WithTrainersServerKeywordPage, { generateMetadata } from './harmonia-ot-15-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt15WithTrainersServerKeywordPage />;
}
