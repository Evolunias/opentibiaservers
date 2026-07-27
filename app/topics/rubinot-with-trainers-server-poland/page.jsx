import RubinotWithTrainersServerPolandKeywordPage, { generateMetadata } from './rubinot-with-trainers-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotWithTrainersServerPolandKeywordPage />;
}
