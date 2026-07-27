import NtoStar13WithTrainersServerKeywordPage, { generateMetadata } from './nto-star-13-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar13WithTrainersServerKeywordPage />;
}
