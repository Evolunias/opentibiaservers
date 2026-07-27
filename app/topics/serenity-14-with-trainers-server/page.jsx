import Serenity14WithTrainersServerKeywordPage, { generateMetadata } from './serenity-14-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity14WithTrainersServerKeywordPage />;
}
