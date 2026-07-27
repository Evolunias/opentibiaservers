import Carlinot11WithTrainersServerKeywordPage, { generateMetadata } from './carlinot-11-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot11WithTrainersServerKeywordPage />;
}
