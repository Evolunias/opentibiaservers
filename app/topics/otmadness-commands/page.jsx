import OtmadnessCommandsKeywordPage, { generateMetadata } from './otmadness-commands';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessCommandsKeywordPage />;
}
