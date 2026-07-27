import NtoStar15WithTrainersServerKeywordPage, { generateMetadata } from './nto-star-15-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar15WithTrainersServerKeywordPage />;
}
