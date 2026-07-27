import Tibiaretro13WithTrainersServerKeywordPage, { generateMetadata } from './tibiaretro-13-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro13WithTrainersServerKeywordPage />;
}
