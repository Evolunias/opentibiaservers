import TibiaretroTrainingKeywordPage, { generateMetadata } from './tibiaretro-training';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroTrainingKeywordPage />;
}
