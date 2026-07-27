import Serenity15WithTrainersServerKeywordPage, { generateMetadata } from './serenity-15-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity15WithTrainersServerKeywordPage />;
}
