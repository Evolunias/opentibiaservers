import Serenity84WithTrainersServerKeywordPage, { generateMetadata } from './serenity-8-4-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity84WithTrainersServerKeywordPage />;
}
