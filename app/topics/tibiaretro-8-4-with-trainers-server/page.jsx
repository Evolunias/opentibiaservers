import Tibiaretro84WithTrainersServerKeywordPage, { generateMetadata } from './tibiaretro-8-4-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro84WithTrainersServerKeywordPage />;
}
