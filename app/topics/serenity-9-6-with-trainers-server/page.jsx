import Serenity96WithTrainersServerKeywordPage, { generateMetadata } from './serenity-9-6-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity96WithTrainersServerKeywordPage />;
}
