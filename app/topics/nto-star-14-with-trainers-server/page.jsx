import NtoStar14WithTrainersServerKeywordPage, { generateMetadata } from './nto-star-14-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar14WithTrainersServerKeywordPage />;
}
