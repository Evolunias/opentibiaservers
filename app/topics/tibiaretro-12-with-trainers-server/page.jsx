import Tibiaretro12WithTrainersServerKeywordPage, { generateMetadata } from './tibiaretro-12-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro12WithTrainersServerKeywordPage />;
}
