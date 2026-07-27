import RubinotWithTrainersServerUsaKeywordPage, { generateMetadata } from './rubinot-with-trainers-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotWithTrainersServerUsaKeywordPage />;
}
