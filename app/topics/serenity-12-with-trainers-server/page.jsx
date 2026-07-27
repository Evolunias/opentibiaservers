import Serenity12WithTrainersServerKeywordPage, { generateMetadata } from './serenity-12-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity12WithTrainersServerKeywordPage />;
}
