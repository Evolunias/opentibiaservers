import Carlinot13WithTrainersServerKeywordPage, { generateMetadata } from './carlinot-13-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Carlinot13WithTrainersServerKeywordPage />;
}
