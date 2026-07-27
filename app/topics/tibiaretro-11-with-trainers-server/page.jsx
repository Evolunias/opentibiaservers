import Tibiaretro11WithTrainersServerKeywordPage, { generateMetadata } from './tibiaretro-11-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro11WithTrainersServerKeywordPage />;
}
