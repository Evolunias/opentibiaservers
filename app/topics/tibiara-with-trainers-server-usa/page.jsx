import TibiaraWithTrainersServerUsaKeywordPage, { generateMetadata } from './tibiara-with-trainers-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraWithTrainersServerUsaKeywordPage />;
}
