import Carlinot12WithTrainersServerKeywordPage, { generateMetadata } from './carlinot-12-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot12WithTrainersServerKeywordPage />;
}
