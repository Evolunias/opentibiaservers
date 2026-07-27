import Tibiaretro96WithTrainersServerKeywordPage, { generateMetadata } from './tibiaretro-9-6-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro96WithTrainersServerKeywordPage />;
}
