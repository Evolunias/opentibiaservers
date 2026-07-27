import NtoStar12WithTrainersServerKeywordPage, { generateMetadata } from './nto-star-12-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar12WithTrainersServerKeywordPage />;
}
