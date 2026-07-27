import Serenity11WithTrainersServerKeywordPage, { generateMetadata } from './serenity-11-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity11WithTrainersServerKeywordPage />;
}
