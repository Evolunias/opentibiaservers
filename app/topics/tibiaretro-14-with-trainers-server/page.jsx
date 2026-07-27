import Tibiaretro14WithTrainersServerKeywordPage, { generateMetadata } from './tibiaretro-14-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro14WithTrainersServerKeywordPage />;
}
