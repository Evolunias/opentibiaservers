import Thaisot13WithTrainersServerKeywordPage, { generateMetadata } from './thaisot-13-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot13WithTrainersServerKeywordPage />;
}
