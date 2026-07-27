import Tibiaretro86WithTrainersServerKeywordPage, { generateMetadata } from './tibiaretro-8-6-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro86WithTrainersServerKeywordPage />;
}
