import Tibiaretro15WithTrainersServerKeywordPage, { generateMetadata } from './tibiaretro-15-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro15WithTrainersServerKeywordPage />;
}
