import RubinotWithTrainersServerFranceKeywordPage, { generateMetadata } from './rubinot-with-trainers-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotWithTrainersServerFranceKeywordPage />;
}
