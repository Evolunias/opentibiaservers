import Serenity13WithTrainersServerKeywordPage, { generateMetadata } from './serenity-13-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity13WithTrainersServerKeywordPage />;
}
