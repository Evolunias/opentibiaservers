import Serenity71WithTrainersServerKeywordPage, { generateMetadata } from './serenity-7-1-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity71WithTrainersServerKeywordPage />;
}
