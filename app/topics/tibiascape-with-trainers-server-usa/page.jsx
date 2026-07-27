import TibiascapeWithTrainersServerUsaKeywordPage, { generateMetadata } from './tibiascape-with-trainers-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeWithTrainersServerUsaKeywordPage />;
}
