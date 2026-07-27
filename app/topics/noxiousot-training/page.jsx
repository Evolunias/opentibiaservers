import NoxiousotTrainingKeywordPage, { generateMetadata } from './noxiousot-training';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoxiousotTrainingKeywordPage />;
}
